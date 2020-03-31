import { AppState } from "../../../redux.config/AppState";

export const isConfirmationLoadingSelector = (appState: AppState) => appState.confirmation.isLoading
export const isConfirmationSucceededSelector = (appState: AppState) => appState.confirmation.success
export const confirmationErrorSelector = (appState: AppState) => appState.confirmation.error
