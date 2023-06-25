import axios from 'axios'
import {productApi} from '../config'

export const  FETCH_FEATURED_PRODUCTS = 'fetch_featured_products'

const fetchFeaturedProducts = () => {
    const url = `${productApi}/featured`

    return async(dispatch) => {
      const result = await axios.get(url)
          dispatch({
              type: FETCH_FEATURED_PRODUCTS,
              payload: result.data.featuredProducts
          })
  }
}

export default fetchFeaturedProducts