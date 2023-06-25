import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './cartItem'
import { useDeleteCartItem } from '../actions/action_deleteCartItem';
import { useUpdateCartItem } from '../actions/action_updateCartItem'
import { findNoOfItems } from '../onepirate/modules/views/AppAppBar'
import { convertToValidPrice } from './getProductsUnderCategory';
import ResponsiveAppBar from './navBar'
import Footer from './footer'
import { PaystackConsumer } from 'react-paystack';
import {useCheckout} from '../actions/action_cartCheckout'
import Swal from 'sweetalert2'
import { paystackKey} from '../config'

import _ from 'lodash'


const Cart = () => {
    const dispatch = useDispatch()
    const [subtotal, setSubtotal] = useState(0)
    const navigate = useNavigate()
    const checkout = useCheckout()
    const updateCartItem = useUpdateCartItem()
    const deleteCartItem = useDeleteCartItem()


   const handleSuccess = ({reference}) => {
   dispatch(checkout(reference))
   };

   const handleClose = () => {
    Swal.fire('You closed the payment page')
   }

    const cart = useSelector(({ cart }) => {
        return cart
    })
    const user = useSelector(({ user }) => {
        return user
    })

    const config = {
        reference: (new Date()).getTime().toString(),
        email: user.email,
        amount: subtotal * 100,
        publicKey: paystackKey,
    };

    const componentProps = {
        ...config,
        text: 'CHECKOUT',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose,
    }

    useEffect(() => {
        let total = 0
        _.map(cart, cartItem => {
            total += (cartItem.price * cartItem.qty)
        })
        setSubtotal(total)
    }, [cart])


    const cartCheckingOut = (initializePayment) => {
        if (!user.isLoggedIn) return navigate('/signIn')
        initializePayment(handleSuccess, handleClose)
    }

    const deleteItem = (_id, id) => {
        dispatch(deleteCartItem(_id, id))
    }

    const updateItem = (cartItem, qty) => {
        dispatch(updateCartItem(cartItem, qty))
    }

    if (Object.keys(cart).length === 0) return (
        <div>
            <ResponsiveAppBar />
            <Box sx={{ display: 'flex', marginTop: {md:'10%',sm: '10%', xs:'20%'}, alignItems: 'center' }}>
                <Container sx={{ paddingTop: '10px', width: '70%' }}>
                    <Typography variant="h6" sx={{ padding: '8px', bgcolor: 'white', background: '#f5f5f5' }}>
                        There is no item in the cart at the moment.
                    </Typography>
                    <Link to='/category/?category=Home%20%26%20kitchen'>
                        <Button variant="contained"
                            sx={{ width: '100%', bgcolor: '#FF3366', '&: hover': { bgcolor: '#FF3366' } }}>
                            Start shopping
                        </Button>
                    </Link>
                </Container>
            </Box>
        </div>
    )

    return (
        <div>
            <ResponsiveAppBar />

            <Box sx={{ marginTop: '72px', background: '#f5f5f5', pb: 2 }}>
                <Container sx={{ paddingTop: '10px' }}>
                    <Typography sx={{ padding: '10px', }}>
                        {`Cart(${findNoOfItems(cart)})`}
                    </Typography>
                    <Grid container spacing={2} sx={{ dispaly: 'flex' }}>
                        <Grid item sm={12} md={9} >

                            {
                                _.map(cart, (cartItem) => {
                                    return <CartItem key={cartItem.name} cartDetail={cartItem}
                                        subtotal={subtotal} setSubtotal={setSubtotal}
                                        deleteItem={deleteItem} updateItem={updateItem} />
                                })
                            }

                        </Grid>
                        <Grid item xs={12} md={3} sx={{ padding: '4px', marginTop: '10px', order: { xs: '-1', md: '0' }, }} >
                            <Box >
                                <Typography variant="h6" sx={{ padding: '8px', bgcolor: 'white', border: '1px solid #f5f5f5' }}>
                                    Cart Summary
                                </Typography>
                                <Typography variant="h6" sx={{ padding: '8px', bgcolor: 'white', border: '1px solid #f5f5f5' }}>
                                    Subtotal
                                    <span style={{ float: 'right' }}>
                                        {convertToValidPrice(subtotal)}
                                    </span>
                                </Typography>

                                <PaystackConsumer  {...componentProps}>
                                    {({ initializePayment }) => 
                                        <Button variant="contained"
                                            onClick={() => cartCheckingOut(initializePayment)}
                                            sx={{ width: '100%', bgcolor: '#FF3366', '&: hover': { bgcolor: '#FF3366' }, position: { xs: 'fixed', md: 'static' }, bottom: '2px', right: '5px' }}>
                                            CHECKOUT
                                        </Button>
                                    }
                                </PaystackConsumer>
                            </Box>


                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Footer />
        </div>
    )
}

export default Cart


