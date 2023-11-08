import { AddToCart, RemoveToCart } from './actions/store.actions';
import { storeReducers } from './reducers/store.reducers';
import { ProductModel } from './models/store.models';
import { StoreState } from './states/store.states';
import { getProducts } from './selectore/store.selectors';

const fromProductStore = {
    AddToCart, RemoveToCart,
    storeReducers,
    getProducts,
}