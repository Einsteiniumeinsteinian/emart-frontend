import { FETCH_PRODUCT } from '../actions/action_fetchProduct'

export default function fetchedProductReducer(state={}, action){
    switch(action.type){
        case FETCH_PRODUCT: return  {...state, [action.payload._id]: action.payload}
         default: return state
    }
}