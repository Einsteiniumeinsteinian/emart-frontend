import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {productApi} from '../config'
export const CLEAR_CART = 'CLEAR_CART'

const url = `${productApi}/payment/reference`


export function useCheckout(){
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate()

    const checkoutCart = (reference) => {
             return async (dispatch) => {
                try{
                    //get values and make API call
                    const result = await axios.post(url, { reference }, {
                        headers: {
                            'content-type': 'application/json', 'Authorization': `Bearer ${token}`
                        }
                    })
        
                    dispatch({
                        type: CLEAR_CART,
                    })
                    navigate('/cart')
                    Swal.fire(
                        'success',
                        result.data.message,
                        'success')

                } catch(err){
                    console.log(err)
                    navigate('/signIn')
                }
         
        }
    }

    //what hook returns
    return (
        checkoutCart
    )
}


