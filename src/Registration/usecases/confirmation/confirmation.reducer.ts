import { CONFIRM, CONFIRMATION_FAILED, CONFIRMATION_SUCCEEDED } from "./confirmation.actions";
import { ConfirmationState } from "../../../redux.config/AppState";

const initialState: ConfirmationState = {
    success : null,
    isLoading: false,
    error: undefined
}

export const confirmationReducer = (state = initialState, action: any): ConfirmationState => {
    switch (action.type) {
        case CONFIRM:
            return { isLoading: true, error: undefined, success: null }
        case CONFIRMATION_FAILED:
            return { ...state, isLoading: false, error: action.payload, success: false }
        case CONFIRMATION_SUCCEEDED:
            return { ...state, isLoading: false, error: undefined, success: true }
        default:
            return state
    }
}
