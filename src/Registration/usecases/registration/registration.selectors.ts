import { AppState } from "../../../redux.config/AppState";

export const isRegistrationLoadingSelector = (appState: AppState) => appState.registration.isLoading
export const isRegistrationSucceededSelector = (appState: AppState) => appState.registration.success
export const registrationErrorSelector = (appState: AppState) => appState.registration.error
