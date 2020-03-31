import { connect } from 'react-redux'
import { AppState } from "../../../../redux.config/AppState";
import {
    isRegistrationLoadingSelector, isRegistrationSucceededSelector,
    registrationErrorSelector
} from "../../../usecases/registration/registration.selectors";
import { register } from "../../../usecases/registration/registration.actions";
import { RegistrationContainer } from "./registration.container";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: AppState) => ({
        isLoading: isRegistrationLoadingSelector(state),
        error: registrationErrorSelector(state),
        success: isRegistrationSucceededSelector(state)
    }
)

const mapDispatchToProps = (dispatch: any) => ({
        register: (phoneNumber: string) => dispatch(register(phoneNumber))
    }
)

export const Registration = connect(mapStateToProps, mapDispatchToProps)(withRouter(RegistrationContainer))
