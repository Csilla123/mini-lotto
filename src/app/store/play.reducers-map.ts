import { BetsState, betReducer } from './play.reducer';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    betState: BetsState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    betState: betReducer
};