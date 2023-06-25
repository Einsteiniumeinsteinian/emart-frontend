import {combineReducers} from '@reduxjs/toolkit'
import productsReducer from './productsReducer'
import itemsInCartReducer from './itemsInCartReducer'
import productsUnderCategoryReducer from './productsUnderCategoryReducer'
import fetchedProductReducer from './fetchedProductsReducer'
import userReducer from './userReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const userPersistConfig = {
    key: 'user',
    storage,
    blacklist: ['isLoggedIn']
  }

const rootReducer = combineReducers({
    products: productsReducer,
    cart: itemsInCartReducer,
    productsUnderCategory: productsUnderCategoryReducer,
    fetchedProducts: fetchedProductReducer,
    user: persistReducer(userPersistConfig, userReducer),
    
})

export default rootReducer