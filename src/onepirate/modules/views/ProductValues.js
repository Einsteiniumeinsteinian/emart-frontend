import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import ScrollAnimation from "react-animate-on-scroll";


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 10, mb: 10, display: 'flex', position: 'relative' , textAlign: 'center'}}>
       
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>
            <Box sx={item}>
              <LocalShippingIcon style={{fontSize: '40px'}} />
            
              <Typography variant="h6" sx={{ my: 5 }} >
                Fast Delivery of Orders
              </Typography>
              <Typography variant="h5">
                {
                  'We ship over 4 million products around the world'
                }

                {
                  'and you get your orders delivered in due time.'
                }
              </Typography>
            </Box>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="animate__slideInRight" animateOnce='true'>
            <Box sx={item}>
              <MoneyOffIcon  style={{fontSize: '40px'}} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Discount Offers
              </Typography>
              <Typography variant="h5">
                {'By registering, you will get access to periodic discount rates. '}
              </Typography>
            </Box>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
