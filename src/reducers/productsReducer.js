import { FETCH_FEATURED_PRODUCTS } from '../actions/action_fetchFeaturedProducts'
import { SEARCH_FOR_PRODUCT } from '../actions/action_searchForProduct'
import _ from 'lodash'

export default function productsReducer(state = {}, action){
    switch(action.type){
        case FETCH_FEATURED_PRODUCTS : return _.mapKeys(action.payload, '_id')
        case SEARCH_FOR_PRODUCT: return _.mapKeys(action.payload, '_id')

        default: return state
    }
}