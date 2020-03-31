import React, { PureComponent } from 'react'
import '../css/register.container.css'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps {
    register: (phoneNumber: string) => void
    isLoading: boolean
    error: string | undefined
    success: boolean | null
}

interface State {
    phoneNumber: string
}

export class RegistrationContainer extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            phoneNumber: '+33'
        }
    }

    componentDidUpdate(){
        if(this.props.success)
            this.props.history.push('/confirmation')
    }

    render() {
        return (
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form validate-form">
                        <div className='wrap-input100 '>
                            <img className='image-header'
                                 src="https://www.vivezclichy.fr/wp-content/uploads/2018/06/cropped-logosize-3.png"
                                 height="55" width="240" alt="VIVEZ  CLICHY"/>
                            <span className="login100-form-title">Inscription</span>
                        </div>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" value={this.state.phoneNumber}
                                   onChange={(event) => this.setState({ phoneNumber: event.target.value })}/>
                            <span className="focus-input100"/>
                        </div>
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"/>
                                <button className="login100-form-btn"
                                        onClick={() => this.signup()}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    signup() {
        //validation should be here
        this.props.register(this.state.phoneNumber)
    }
}