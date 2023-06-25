import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import {useAlert} from 'react-alert'
import {productApi} from '../config'


export const CREATE_CART_ITEM_USER = 'cart_item_user'
export const CREATE_CART_ITEM = 'cart_item'


export function useCreateCartItem(){
    const navigate = useNavigate()
    const alert = useAlert()
    const token = window.localStorage.getItem('token')

    const createCartItem = (product, selectedSize, image,qty) => {
        const url = `${productApi}/cart/add`
        const { name, price, _id } = product
        const valuesforDB = {name, price, image, size: selectedSize, qty}
        const valuesforLS =  {id: _id, name, price, image, size: selectedSize, qty}
        
        if (!token) {
            Swal.fire(
                'success',
                'product added successfully',
                'success')

            return {
                type: CREATE_CART_ITEM,
                payload: valuesforLS
            }
        } else {

            return async (dispatch) => {
                try{
                    const result = await axios.post(url, valuesforDB, {
                            headers: { 'content-type': 'application/json', 'Authorization': `Bearer ${token}`}})

                     const recentCartItem =   { ...result.data.newCartItem, id:_id }
                    dispatch({
                        type: CREATE_CART_ITEM_USER,
                        payload: recentCartItem
                    })
                    Swal.fire(
                        'success',
                        'product added successfully',
                        'success')

                }catch(err){
                  navigate('/signIn')
                  alert.error(err.response.data.message)
                }
              
            }
        }
    
    }

    //what hook returns
    return (
        createCartItem
    )
}

