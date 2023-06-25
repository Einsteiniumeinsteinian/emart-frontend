import React, { Component } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import { StyledEngineProvider } from '@mui/material';
import { convertToValidPrice } from './getProductsUnderCategory';



const styles = {
    boxShadow: '5px 5px 3px lightgray', border: '1px solid gray', marginTop: '10px',
    borderRadius: '3px', background: 'white'
}

class CartItem extends Component {
    constructor(props) {
        super(props)

        this.state = { qty: this.props.cartDetail.qty }
        this.increaseQuantity = this.increaseQuantity.bind(this)
        this.decreaseQuantity = this.decreaseQuantity.bind(this)

    }

    increaseQuantity(values) {
        this.setState(prevState => ({ qty: prevState.qty + 1 }))
        this.props.setSubtotal(this.props.subtotal + this.props.cartDetail.price)
        this.props.updateItem(values, this.state.qty + 1)
    }
    decreaseQuantity(values) {
        this.setState((prevState) => ({ qty: prevState.qty - 1 }))
        this.props.setSubtotal(this.props.subtotal - this.props.cartDetail.price)
        this.props.updateItem(values, this.state.qty - 1)

    }

    render() {
        const { _id, id, name, image, size, price } = this.props.cartDetail
        return (
            <StyledEngineProvider injectFirst>
                <Grid container spacing={1} key={name} sx={styles} >
                    <Grid item xs={2} md={2} >
                        <img src={image} style={{ margin: '0', width: '90%', height: '100%', objectFit: 'contain' }} alt='selectedImage' />
                    </Grid>
                    <Grid item xs={10} md={10} sx={{
                        display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between', padding: '4px',
                    }}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'space-between'
                        }} >
                            <div>
                                <Typography variant="h6" marked="center"  >
                                    {name}
                                </Typography>
                                {size && <Typography variant="h6" marked="center" sx={{mt:0.5,fontSize: '16px'}}>
                                    {`SIZE: ${size}`}
                                </Typography>}
                            </div>
                            <Button
                                variant="filled" startIcon={<DeleteOutlinedIcon />}
                                onClick={() => this.props.deleteItem(_id, id)}
                                sx={{ color: '#FF3366', padding: '2px 2px', justifyContent: 'start' }}>
                                Remove
                            </Button>
                        </Box>
                        <span style={{
                            marginRight: '5px', display: 'flex', flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant="h6" marked="center"
                                sx={{ textAlign: 'right' }} >
                                {convertToValidPrice(price)}
                            </Typography>
                            <div >
                                <ButtonGroup size='small' aria-label='small outlined button group'>
                                    {
                                        (this.state.qty > 1) && <Button
                                            variant="filled"
                                            onClick={() => this.decreaseQuantity(this.props.cartDetail)}
                                            sx={{ color: '#FF3366', padding: '2px 2px', border: '1px solid #FF3366' }}>
                                            -
                                        </Button>
                                    }
                                    <Button disabled
                                        variant="filled"
                                        sx={{ color: '#FF3366', padding: '2px 2px', border: '1px solid #FF3366' }}
                                    >
                                        {this.state.qty}
                                    </Button>
                                    <Button
                                        variant="filled"
                                        onClick={() => this.increaseQuantity(this.props.cartDetail)}
                                        sx={{ color: '#FF3366', padding: '2px 2px', border: '1px solid #FF3366' }}>
                                        +
                                    </Button>
                                </ButtonGroup>
                            </div>

                        </span>
                    </Grid>
                </Grid>
            </StyledEngineProvider>
        )
    }

}

export default CartItem

