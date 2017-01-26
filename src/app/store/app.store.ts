import { Store } from '@ngrx/store';

import {combineReducers, ActionReducer} from '@ngrx/store';
import {authReducer} from './../reducers/auth.reducer';
import {AppState} from "./../model/app.state";

const allReducers = {
    auth: authReducer
}

const combineAllReducers : ActionReducer<AppState> = combineReducers(allReducers);

export function reducer(state:any,action:any){
    return combineAllReducers(state,action);
}