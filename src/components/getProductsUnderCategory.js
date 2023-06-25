import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
 import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import fetchProductsUnderCategory from '../actions/action_fetchProductsUnderCategory'
import ResponsiveAppBar from './navBar';
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider'
import Footer from './footer';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField'

export function convertToValidPrice(num) {
   const Arr = (num.toString()).split('')
   for (let i = Arr.length - 3; i > 0; i -= 3) {
      Arr.splice(i, 0, ',')
   }
   return 'N' + Arr.join('')
}


const StyledTextField = styled(TextField)({
   '& .MuiOutlinedInput-input': {
      padding: '10px 5px',
   }
});

const PriceSlider = styled(Slider)({
   color: '#FF3366'

});

const Hr = styled('hr')(() => ({
   width: '100%',
   background: '#f5f5f5'
}))

const resetButtonStyle = {
   display: 'inline-block',
   float: 'right',
   color: '#FF3366',
   padding: '3px',
   fontSize: '14px',
   '&:hover': { bgcolor: '#dfa2b2', borderRadius: '4px' }
}


const GetProductsUnderCategory = () => {
   const dispatch = useDispatch()
   const [searchParams] = useSearchParams()
   const category = encodeURIComponent(searchParams.get('category'))
   const decodedCategory = decodeURIComponent(category)
   const [value, setValue] = React.useState([2000, 700000]);
   const [radioButtonValue, setRadioButtonValue] = useState(null)
   const [selectedProducts, setSelectedProducts] = useState([])

   const handleChange = ( event, newValue) => {
      setValue(newValue);
   };

   function valuetext(value) {
      return `$N{value}`;
   }
   
   const products = useSelector(({ productsUnderCategory }) => {
      return productsUnderCategory[decodedCategory]
   })

   const handleRadioButtonChange = (event) => {
      setRadioButtonValue(event.target.value);
      const newArrayOfProducts = selectedProducts.filter((product) => product.rating >= event.target.value)
      setSelectedProducts(newArrayOfProducts)
   };

   useEffect(() => {
      dispatch(fetchProductsUnderCategory(category))
   }, [dispatch, category])

   useEffect(() => {
      if(!products) return
      setSelectedProducts(products)
   },[products])


   if (!products) return <div>loading...</div>


   return (
      <>
         <ResponsiveAppBar />
         <Box sx={{ background: '#f5f5f5', marginTop: {md:'76px',sm: '70px', xs:'14%'}, padding: '10px' }} >
            <Link to='/'><span>Home</span></Link> {'> '} <span>{decodedCategory}</span>
            <Container sx={{ paddingTop: '20px' }}>
               <Grid container spacing={1.5} sx={{display: 'flex'}}>
                  <Grid item xs={12} sm={3} md={3} sx={{order: {xs: 2,sm:0,md:0}}}>
                     <Box sx={{ bgcolor: 'white', p: 2 }} >
                        
                           <Typography variant="h6" sx={{ display: 'inline-block', fontSize: '14px' }} >
                              PRODUCT RATING
                           </Typography>
                           {
                            radioButtonValue && <Typography variant="h6" sx={resetButtonStyle} 
                            onClick={()=> {
                              setSelectedProducts(products)
                              setRadioButtonValue(null)
                            }} >
                              RESET
                           </Typography>
}
                        <FormControl>
                           <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              value={radioButtonValue}
                              onChange={handleRadioButtonChange}
                              name="radio-buttons-group"
                           >
                              <FormControlLabel value="4" control={<Radio sx={{ '&.Mui-checked': { color: '#FF3366' } }} />} label={<p><Rating name="read-only" value={4} size='small' readOnly /> & above</p>} />
                              <FormControlLabel value="3" control={<Radio sx={{ '&.Mui-checked': { color: '#FF3366' } }} />} label={<p><Rating name="read-only" value={3} size='small' readOnly /> & above</p>} />
                              <FormControlLabel value="2" control={<Radio sx={{ '&.Mui-checked': { color: '#FF3366' } }} />} label={<p><Rating name="read-only" value={2} size='small' readOnly /> & above</p>} />
                              <FormControlLabel value="1" control={<Radio sx={{ '&.Mui-checked': { color: '#FF3366' } }} />} label={<p><Rating name="read-only" value={1} size='small' readOnly /> & above</p>} />
                           </RadioGroup>
                        </FormControl>
                        <Hr />
                        <Typography variant="h6" sx={{ fontSize: '16px' }} >
                           EXPRESS DELIVERY
                        </Typography>
                        <FormGroup sx={{ display: 'inline-block' }}>
                           <FormControlLabel control={<Checkbox />} label="eMartXPRESS" />
                        </FormGroup>
                        <span style={{ display: 'inline-block', float: 'right' }}><InfoIcon /></span>
                        <Hr />
                        <Typography variant="h6" sx={{ display: 'inline-block', fontSize: '16px' }} >
                           PRICE
                        </Typography>
                        <Typography variant="h6" sx={resetButtonStyle} 
                        onClick={() => {
                        
                           const newArrayOfProducts = selectedProducts.filter((product) => (product.price > value[0] &&  product.price < value[1]))
                           setSelectedProducts(newArrayOfProducts)
                        }}>
                           APPLY
                        </Typography>
                        <Typography variant="h6" sx={resetButtonStyle} 
                        onClick={() => {
                           setSelectedProducts(products)
                        }}>
                           RESET
                           </Typography>
                        <PriceSlider
                           getAriaLabel={() => 'Price range'}
                           min={2000}
                           max={700000}
                           value={value}
                           onChange={handleChange}
                           valueLabelDisplay="auto"
                           getAriaValueText={valuetext}
                        />
                        <StyledTextField
                           id="outlined-number"
                           type="number"
                           size="small"
                           value={value[0]}
                           InputLabelProps={{
                              shrink: true,
                           }}
                           sx={{display: 'inline-block', width: {md:'45%', sm: '35%',xs:'45%'}}}
                        />
                        <p className='dash' style={{display:'inline',verticalAlign: 'middle',fontSize: '30px',margin: '0px 7px'}}>-</p>
                        <StyledTextField
                           id="outlined-number"
                           type="number"
                           size="large"
                           value={value[1]}
                           InputLabelProps={{
                              shrink: true,
                           }}
                           sx={{display: 'inline-block', width: {md:'45%', sm: '45%',xs:'45%'}}}
                        />
                        <Hr />
                        <Typography variant="h6" sx={{ fontSize: '16px' }} >
                           SHIPPED FROM
                        </Typography>
                        <FormGroup>
                           <FormControlLabel control={<Checkbox />} label="shipped from abroad" />
                           <FormControlLabel control={<Checkbox />} label="shipped from nigeria" />
                        </FormGroup>
                      
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={9} md={9}>
                     <Grid container spacing={1}>
                        {
                           selectedProducts.map((product) => {
                              return <Grid item xs={6} sm={4} md={3} key={product._id}>
                                 <Card
                                    sx={{ borderRadius: 2, padding: '5px' }}
                                 >
                                    <Link to={`/${product._id}`}>
                                       <CardActionArea
                                          sx={{ height: '90%' }}
                                       >
                                          <CardMedia
                                             component='img'
                                             src={product.images[0]}
                                          />
                                          <Typography sx={{ textDecoration: 'none', color: 'black', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                             {product.name}
                                          </Typography>
                                          <Typography
                                             sx={{ textDecoration: 'none', color: 'black' }}
                                             variant='h5'>
                                             {convertToValidPrice(product.price)}
                                          </Typography>
                                          <Rating name="read-only" value={product.rating} precision={0.1} size='small' readOnly />
                                       </CardActionArea>
                                    </Link>
                                 </Card>

                              </Grid>
                           })
                        }
                     </Grid>
                  </Grid>
               </Grid>
            </Container>
         </Box>
         <Footer />
      </>
   )
}

export default GetProductsUnderCategory