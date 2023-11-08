import * as storeActions from '../actions/store.actions';
import { StoreState } from '../states/store.states';
import { ProductModel } from '../models/store.models';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: StoreState = { products:[] };

export const productReducer = createReducer<StoreState>(
    initialState,

    on(storeActions.AddToCart, (state, action)=>{
        state = JSON.parse(JSON.stringify(state));
        let isExist = Boolean(state.products.find((product:ProductModel)=> product._id === action.cart._id));
        console.log(isExist);
        if(isExist){
            let existItem = state.products.find((product:ProductModel)=> product._id === action.cart._id);
            console.log(existItem?.quantity);
            
            return {
                ...state,
                products: [...state.products]
            }
        }else{
            return {
                ...state,
                products: [...state.products, action.cart]
            }
        }
        

    }),
    on(storeActions.RemoveToCart, (state, action)=>{
        state = JSON.parse(JSON.stringify(state));
        let index = state.products.findIndex((product:ProductModel)=> product._id === action.cart._id);
        state.products.splice(index, 1);
        return {
            ...state,
            products: [...state.products]
        }
    }),
    // on(storeActions.AddToCart, (state, product)=>({...state, product})),
    // on(storeActions.RemoveToCart, (state, product)=>({...state, product})),
);

export function storeReducers(state: StoreState, action: Action){
    return productReducer(state, action)
}