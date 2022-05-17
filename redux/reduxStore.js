import { createStore, combineReducers } from 'redux';
import { cipherReducer } from './reducers/CipherReducer'

const rootReducer = combineReducers(
    {cipherReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;