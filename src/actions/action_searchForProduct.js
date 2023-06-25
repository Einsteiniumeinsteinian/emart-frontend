import axios from 'axios'
import {productApi} from '../config'

export const SEARCH_FOR_PRODUCT = 'search_for_product'


const searchForProduct = name => {
    const url = `${productApi}/search?name=${name}`

    return async(dispatch) => {
        const result = await axios.get(url)
            dispatch({
                type: SEARCH_FOR_PRODUCT,
                payload: result.data.foundProduct
            })
    }
}

export default searchForProduct