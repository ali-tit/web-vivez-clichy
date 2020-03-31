import { ConfirmationContainer } from './confirmation.container'
import { connect } from 'react-redux'
import { Dispatch } from 'react'
import { confirm } from "../../../usecases/confirmation/confirmation.actions";
import {
    isConfirmationLoadingSelector, confirmationErrorSelector,
    isConfirmationSucceededSelector
} from "../../../usecases/confirmation/confirmation.selectors";
import { phoneNumberSelector } from "../../../usecases/registration/registration.selectors";
import { AppState } from '../../../../redux.config/AppState';

const mapStateToProps = (state: AppState) => (
    {
        isLoading: isConfirmationLoadingSelector(state),
        error: confirmationErrorSelector(state),
        confirmed: isConfirmationSucceededSelector(state),
        phoneNumber: phoneNumberSelector(state)
    }
)

const mapDispatchToProps = (dispatch: Dispatch<any>) => (
    {
        confirm: (phoneNumber: string | null, confirmationCode: string) => dispatch(confirm(phoneNumber, confirmationCode))
    }
)
export const Confirmation = connect(mapStateToProps, mapDispatchToProps)(ConfirmationContainer)