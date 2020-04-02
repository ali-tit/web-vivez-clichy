export const SAVE_TOKEN = 'SAVE_TOKEN'
export const GET_TOKEN = 'GET_TOKEN'
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS'

export const saveToken = (token: string) => ({
    type   : SAVE_TOKEN,
    payload: token
})

export const getToken = () => ({
    type: GET_TOKEN
})

export const getTokenSucceeded = (token: string) => ({
    type   : GET_TOKEN_SUCCESS,
    payload: token
})

