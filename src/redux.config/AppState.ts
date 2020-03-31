export interface AppState {
    registration: RegistrationState
    confirmation: ConfirmationState

}

export interface RegistrationState {
    isLoading: boolean,
    error: string | undefined,
    success: boolean | null,
    phoneNumber: string | null
}

export interface ConfirmationState {
    isLoading: boolean,
    error: string | undefined,
    success: boolean | null
}

