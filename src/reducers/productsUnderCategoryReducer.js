import { FETCH_PRODUCTS_UNDER_CATEGORY } from "../actions/action_fetchProductsUnderCategory";

export default function productsUnderCategoryReducer(state={}, action){
    switch(action.type){
        case FETCH_PRODUCTS_UNDER_CATEGORY : return { ...state, [action.payload[0].category]: action.payload}
         default: return state
    }
}