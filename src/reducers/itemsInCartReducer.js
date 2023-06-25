import { CREATE_CART_ITEM_USER , CREATE_CART_ITEM } from "../actions/action_createCartItem";
import { DELETE_CART_ITEM_USER, DELETE_CART_ITEM } from "../actions/action_deleteCartItem";
import {UPDATE_CART_ITEM_USER, UPDATE_CART_ITEM } from "../actions/action_updateCartItem";
import {CLEAR_CART} from '../actions/action_cartCheckout'

import _ from 'lodash'

export default function itemsInCartReducer(state = {}, action){
    switch(action.type){
        case CREATE_CART_ITEM  : return {...state, [ action.payload.id]: action.payload}
        case CREATE_CART_ITEM_USER  : return {...state, [ action.payload.id]: action.payload}
        case UPDATE_CART_ITEM  : return {...state, [ action.payload.id]: action.payload}
        case UPDATE_CART_ITEM_USER  : return {...state, [ action.payload.id]: action.payload}
        case DELETE_CART_ITEM : return _.omit(state, action.payload)
        case DELETE_CART_ITEM_USER : return _.omit(state, action.payload)
        case CLEAR_CART :  return {}
        default: return state
    }
} 

