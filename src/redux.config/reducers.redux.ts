import { combineReducers } from 'redux'
import { AppState } from './AppState'
import { registrationReducer } from "../Registration/usecases/registration/registration.reducer";
import { confirmationReducer } from "../Registration/usecases/confirmation/confirmation.reducer";

export const reduxReducer = combineReducers<AppState>({
    registration: registrationReducer,
    confirmation: confirmationReducer
})
