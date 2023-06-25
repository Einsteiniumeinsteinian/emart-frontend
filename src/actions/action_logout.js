
export const LOGOUT = 'logout'

const Logout = () => {
    window.localStorage.removeItem('token')
    
    return {
        type: LOGOUT
    }
}

export default Logout