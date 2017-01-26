import { Store, Action } from '@ngrx/store';


export const types = {
    logIn : "LoggedIn",
    logOut : "LoggedOut"
};

export function authReducer(state: any, action: Action) {
    
switch (action.type) {
        case 'LoggedIn':
            return action.payload;
        case 'LoggedOut':
            return action.payload
        default:
            return state;
    }
}