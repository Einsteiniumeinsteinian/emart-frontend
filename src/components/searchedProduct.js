import React, { useEffect } from 'react'
import searchForProduct from '../actions/action_searchForProduct'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import ResponsiveAppBar from './navBar'
import { convertToValidPrice } from './getProductsUnderCategory';
import Footer from './footer'


import _ from 'lodash'



const SearchedProduct = () => {
   const dispatch = useDispatch()
   const [searchParams] = useSearchParams()
   const name = searchParams.get('name')


   useEffect(() => {
      dispatch(searchForProduct(name))
   }, [dispatch, name])

   const products = useSelector(({ products }) => {
      return products
   })

   if (!products) return <div>loading...</div>

   return (
      <>
         <ResponsiveAppBar />
         <Box sx={{ background: '#f5f5f5', marginTop: {md:'76px',sm: '70px', xs:'14%'}, padding: '10px'  }} >

            <Container>
               <Grid container spacing={1}>
                  {
                     _.map(products, (product) => {
                        return <Grid item xs={6} md={3} key={product._id}>
                           <Card
                              sx={{ borderRadius: 2, padding: '5px' }}
                           >
                              <CardActionArea href={`/${product._id}`}>
                                 <CardMedia
                                    component='img'
                                    src={product.images[0]}
                                 />
                                 <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}>
                                    {product.name}
                                 </Typography>
                                 <Typography
                                    variant='h5'>
                                    {convertToValidPrice(product.price)}
                                 </Typography>
                              </CardActionArea>
                          
                           </Card>

                        </Grid>
                     })
                  }
               </Grid>
            </Container>
         </Box>
         <Footer />
      </>
   )
}

export default SearchedProduct