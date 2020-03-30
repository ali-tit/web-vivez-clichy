export const REGISTER = 'REGISTER'
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED'
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED'

export const register = (phoneNumber: string) => ({
    type   : REGISTER,
    payload: phoneNumber
})

export const registrationSucceeded = () => ({
    type: REGISTRATION_SUCCEEDED
})

export const registrationFailed = (error: string) => ({
    type   : REGISTRATION_FAILED,
    payload: error
})
