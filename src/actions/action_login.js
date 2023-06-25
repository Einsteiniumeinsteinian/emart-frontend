import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useAlert} from 'react-alert'
import {backendApi} from '../config'



export const LOGIN = 'login'

const url = `${backendApi}/login`

export function useLoginUser() {
    const navigate = useNavigate()
    const alert = useAlert()

    const loginUser = (values) => {
        return async (dispatch) => {
            try {
                const res = await axios.post(url, values, {
                    headers: { 'content-type': 'application/json' }
                })


                window.localStorage.setItem('token', `${res.data.token}`)

                dispatch({
                    type: LOGIN,
                    payload: res.data.user
                })
                navigate('/')
            } catch (err) {               
                navigate('/signIn')
                alert.error(err.response.data.message)
               
                
            }
        }

    }
    
    //what hook returns
    return (
        loginUser
    )
}