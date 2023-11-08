import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../models/store.models';

export const AddToCart = createAction('[CART] Add to cart', props<{cart:ProductModel}>());
export const RemoveToCart = createAction('[CART] Remove to cart', props<{cart:ProductModel}>());