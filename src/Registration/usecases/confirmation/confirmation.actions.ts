export const CONFIRM= 'CONFIRM'
export const CONFIRMATION_SUCCEEDED = 'CONFIRMATION_SUCCEEDED'
export const CONFIRMATION_FAILED = 'CONFIRMATION_FAILED'


export const confirm = (phoneNumber: string | null, confirmationCode: string) => ({
    type   : CONFIRM,
    payload: {phoneNumber: phoneNumber, confirmationCode: confirmationCode}
})

export const confirmationSucceeded = () => ({
    type: CONFIRMATION_SUCCEEDED
})

export const confirmationFailed = (error: string) => ({
    type   : CONFIRMATION_FAILED,
    payload: error
})
