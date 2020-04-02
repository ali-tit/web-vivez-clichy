import { SAVE_TOKEN, GET_TOKEN_SUCCESS } from "./auth.actions"
import { AuthState } from "../../../redux.config/AppState"

const initialState: AuthState = {
    token: ''
}

export const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
        case SAVE_TOKEN:
            return {
                ...state, token: action.payload
            }
        case GET_TOKEN_SUCCESS:
            return {
                ...state, token: action.payload
            }
        default:
            return state
    }
}