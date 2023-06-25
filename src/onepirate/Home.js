import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import withRoot from './modules/withRoot';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/footer';


function Index() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);
