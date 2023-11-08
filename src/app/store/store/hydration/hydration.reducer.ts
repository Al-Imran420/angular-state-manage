import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { StoreState } from '../states/store.states';
import { MetaReducer } from "@ngrx/store";

export const hydrationMetaReducer = (
  reducer: ActionReducer<StoreState>
): ActionReducer<StoreState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('cart');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('cart');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('cart', JSON.stringify(nextState));
    return nextState;
  };
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];