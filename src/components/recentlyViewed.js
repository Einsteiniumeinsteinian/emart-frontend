import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import _ from 'lodash'
import { convertToValidPrice } from './getProductsUnderCategory';


const RecentlyViewed = () => {

    const viewedProducts = useSelector(({ fetchedProducts }) => {
        return fetchedProducts
    })


    return (
        <Box>
            <Typography variant="h6" sx={{ mt: 3, mb: 0.5, padding: '8px', bgcolor: 'white', paddingLeft: '15px' }}>
                Recently viewed
            </Typography>

            <Grid container spacing={1} sx={{flexWrap: {xs:'nowrap',md: 'wrap'}, overflowX: {xs:'scroll',md: 'unset'}}} >
                {
                    _.map(viewedProducts, (product) => {
                        return <Grid item xs={6} sm={3} md={2.4} key={product._id}>
                            <Card
                                sx={{ borderRadius: 2, padding: '5px' }}
                            >
                                <Link to={`/${product._id}`}>
                                    <CardActionArea sx={{ height: '90%' }}>
                                        <CardMedia
                                            component='img'
                                            src={product.images[0]}
                                        />
                                        <Typography sx={{ textDecoration: 'none', color: 'black', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis' }}>
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            sx={{ textDecoration: 'none', color: 'black' }}
                                            variant='h5'>
                                            {convertToValidPrice(product.price)}
                                        </Typography>
                                    </CardActionArea>
                                </Link>
                            </Card>

                        </Grid>
                    })
                }
            </Grid>

        </Box>
    )
}

export default RecentlyViewed