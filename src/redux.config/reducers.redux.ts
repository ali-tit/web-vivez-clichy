import { combineReducers } from 'redux'
import { AppState } from './AppState'
import { registrationReducer } from "../Registration/usecases/registration/registration.reducer";
import { confirmationReducer } from "../Registration/usecases/confirmation/confirmation.reducer";
import { authReducer } from '../Common/usecases/auth/auth.reducer';

export const reduxReducer = combineReducers<AppState>({
    registration: registrationReducer,
    confirmation: confirmationReducer,
    auth: authReducer
})
