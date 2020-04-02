export interface AppState {
    registration: RegistrationState
    confirmation: ConfirmationState
    auth:  AuthState

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

export interface AuthState {
    token: string
}

