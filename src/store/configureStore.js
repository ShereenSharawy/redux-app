import {applyMiddleware, compose,createStore} from 'redux';
import rootReducer from '../store/reducers';
import thunk from "redux-thunk"

const store = createStore(
  rootReducer,
   applyMiddleware(thunk)
)
export default store;