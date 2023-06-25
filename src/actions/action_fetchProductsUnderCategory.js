import axios from 'axios'
import {productApi} from '../config'

export const FETCH_PRODUCTS_UNDER_CATEGORY = 'fetch_products_under_category'

const fetchProductsUnderCategory = categoryValue => {
    const url = `${productApi}/category?category=${categoryValue}`

    return async(dispatch) => {
        
            const result = await axios.get(url)
            dispatch({
                type: FETCH_PRODUCTS_UNDER_CATEGORY,
                payload: result.data.foundProducts
            })
      
    }
}

export default fetchProductsUnderCategory