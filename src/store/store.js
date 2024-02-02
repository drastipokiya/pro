import { createStore } from 'redux';
import productReducer from '../reducers/reducers';

const store = createStore(productReducer);

export default store;
