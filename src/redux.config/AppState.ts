export interface AppState {
    registration: RegistrationState
}

export interface RegistrationState {
    isLoading: boolean,
    error: string | undefined,
    success: boolean | null
}