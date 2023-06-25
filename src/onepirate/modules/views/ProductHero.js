import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import {Link} from 'react-router-dom'

const backgroundImage =
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=cover&w=1400&q=80'
export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
    
      <Typography color="inherit" align="center" variant="h3" marked="center" sx={{mt:{xs:5,md:5},fontFamily: 'varela round'}}>
        Your wants/needs in one  place
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy offers up to 50% off on featured products every Friday.
      </Typography>
      <Link to='/signUp'>
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        sx={{ minWidth: 200, borderRadius: '4px' }}
      >
        Shop Now
      </Button>
      </Link>
     
    </ProductHeroLayout>
  );
}
