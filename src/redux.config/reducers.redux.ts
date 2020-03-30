import { combineReducers } from 'redux'
import { AppState } from './AppState'
import { registrationReducer } from "../Registration/usecases/registration/registration.reducer";

export const reduxReducer = combineReducers<AppState>({
    registration: registrationReducer
})
