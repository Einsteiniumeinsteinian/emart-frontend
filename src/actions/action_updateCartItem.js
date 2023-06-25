import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useAlert} from 'react-alert'

export const UPDATE_CART_ITEM = 'update_cart_item'
export const UPDATE_CART_ITEM_USER = 'update_cart_item_user'

const baseUrl = process.env.REACT_APP_PRODUCT_API

export function useUpdateCartItem(){
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate()
    const alert = useAlert()

    const updateCartItem = (cartItem, qty) => {
        const { _id, id } = cartItem
        const url = `${baseUrl}/cart/${_id}`
        const newCartItem = {...cartItem, qty} 
    
        if (!token && !_id) {
            return {
                type: UPDATE_CART_ITEM,
                payload: newCartItem
            }
        } else {

            return async (dispatch) => {
                try{
                    const newValue = { qty }
                    const result = await axios.patch(url, newValue, {
                        headers: {
                            'content-type': 'application/json', 'Authorization': `Bearer ${token}`
                        }
                    })
                   const newUpdatedCartItem = {...result.data.updatedCartItem,id }
                    dispatch({
                        type: UPDATE_CART_ITEM_USER,
                        payload: newUpdatedCartItem
                    })
                }catch(err){
                  
                    navigate('/signIn')
                  alert.error(err.response.data.message)
                }
               
    
            }
        }
    }

    //what hook returns
    return(
        updateCartItem
    )
}



