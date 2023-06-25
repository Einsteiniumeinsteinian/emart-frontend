import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useAlert} from 'react-alert'
import {productApi} from '../config'

export const DELETE_CART_ITEM = 'delete_cart_item'
export const DELETE_CART_ITEM_USER = 'delete_cart_item_user'



export function useDeleteCartItem(){
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate()
    const alert = useAlert()

    const deleteCartItem = (_id, id) => {
        const url = `${productApi}/cart/delete/${_id}`
    
        if (!token && !_id) {
            alert.show('product removed')
            return {
                type: DELETE_CART_ITEM,
                payload: id
            }
        } else {
    
            return async (dispatch) => {
                try{
                    await axios.delete(url,{
                    headers: {
                         'Authorization': `Bearer ${token}`
                    }})

                    dispatch({
                        type: DELETE_CART_ITEM_USER,
                        payload: id
                    })

                    alert.show('product removed')
                }catch(err){
                    navigate('/signIn')
                    alert.error(err.response.data.message)
                   
                }
               
            }
        }
    }

    //what hook returns
    return (
        deleteCartItem
    )
}

