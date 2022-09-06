import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cart-reducer';




const rootReducer = combineReducers({
  cart: cartReducer,
});

export default persistReducer(
  {
    key: 'global',
    storage,
    whitelist: [],
  },
  rootReducer
);
