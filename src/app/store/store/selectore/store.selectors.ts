import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import { StoreState } from '../states/store.states';

export const getStoreState = createFeatureSelector<StoreState>('storeState');

export const getProducts = createSelector(
    getStoreState,
    (state: StoreState) => state.products
)