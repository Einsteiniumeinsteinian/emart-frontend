import  React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom'
import Typography from '../components/Typography';
import fetchFeaturedProducts from '../../../actions/action_fetchFeaturedProducts';
import _ from 'lodash'
import { convertToValidPrice } from '../../../components/getProductsUnderCategory';



function ProductHowItWorks() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFeaturedProducts())
  }, [dispatch])

  const products = useSelector(({ products }) => {
    return products
  })

  return (
  
      <Container
        sx={{
          mt: 5,
          mb: 5,
          position: 'relative',
          alignItems: 'center',
          bgcolor: 'secondary.light',
          p: 4
        }}
      >
       
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 7,textAlign: 'center'}}>
          Top Deals
        </Typography>
        <div>
          <Grid container spacing={1} sx={{flexWrap: {xs:'nowrap',md: 'wrap'},overflowX: {xs:'scroll',md: 'unset'} }} >
            {
              _.map(products, (product) => {
                return <Grid item xs={6} sm={4} md={2.4} key={product._id}>
                  <Card
                    sx={{ borderRadius: 2,padding: '5px'}}
                  >
                    <CardActionArea
                      sx={{objectFit: 'contain'}}
                    >
                      <Link to={`/${product._id}`}>
                        <CardMedia
                          component='img'
                          src={product.images[0]}
                        />
                      </Link>
                      <Typography sx={{overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis'}} >
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
        </div>

      </Container>
  );
}

export default ProductHowItWorks;
