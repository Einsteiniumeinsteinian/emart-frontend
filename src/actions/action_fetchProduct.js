import axios from 'axios'
import {productApi} from '../config'

export const FETCH_PRODUCT = 'fetch_product'

const fetchProduct = id => {
    const url = `${productApi}/${id}`

    return async(dispatch) => {
        const result = await axios.get(url)
            dispatch({
                type: FETCH_PRODUCT,
                payload: result.data.foundProduct
            })
    }
}

export default fetchProduct