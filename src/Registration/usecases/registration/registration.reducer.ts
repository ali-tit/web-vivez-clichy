import { REGISTER, REGISTRATION_FAILED, REGISTRATION_SUCCEEDED } from "./registration.actions";
import { RegistrationState } from "../../../redux.config/AppState";

const initialState: RegistrationState = {
    isLoading: false,
    error    : undefined,
    success  : null,
    phoneNumber: null
}
export const registrationReducer = (state = initialState, action: any): RegistrationState => {
    switch (action.type) {
        case REGISTER:
            return { isLoading: true, error: undefined, success: null, phoneNumber: action.payload }
        case REGISTRATION_FAILED:
            return { ...state, isLoading: false, error: action.payload, success: false }
        case REGISTRATION_SUCCEEDED:
            return { ...state, isLoading: false, error: undefined, success: true }
        default:
            return state
    }
}
