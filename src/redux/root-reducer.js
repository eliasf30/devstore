import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cart-reducer';
import { userReducer } from './user/user-reducer';




const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default persistReducer(
  {
    key: 'global',
    storage,
    blacklist: [],
  },
  rootReducer
);
