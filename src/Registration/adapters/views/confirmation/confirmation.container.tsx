import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import '../css/confirmation.container.css'
interface State{
    confirmationCode: string
}

interface Props extends RouteComponentProps{
    confirm: (phoneNumber: string | null, confirmationCode: string)=>void
    phoneNumber: string | null
}

export class ConfirmationContainer extends PureComponent<Props, State>{
    constructor(props: Props){
        super(props)
        this.state={
            confirmationCode: ""
        }
    }
    render(){
        return(
            <div className="container-confirm100">
            <div className="wrap-confirm100">
                <div className="confirm100-form validate-form">
                    <div className='wrap-input100 '>
                        <img className='image-header'
                             src="https://www.vivezclichy.fr/wp-content/uploads/2018/06/cropped-logosize-3.png"
                             height="55" width="240" alt="VIVEZ  CLICHY"/>
                        <span className="confirm100-form-title">
                            Entrez le code  
                            <p className="confirm100-form-subtitle">que nous avons envoyé au {this.props.phoneNumber}</p>
                        </span>
                    </div>
                    <div className="wrap-input100 validate-input">
                        <input className="input100" type="text" value={this.state.confirmationCode}
                               onChange={(event) => this.setState({ confirmationCode: event.target.value })}/>
                        <span className="focus-input100"/>
                    </div>
                    <div className="container-confirm100-form-btn">
                        <div className="wrap-confirm100-form-btn">
                            <div className="confirm100-form-bgbtn"/>
                            <button className="confirm100-form-btn"
                                    onClick={() => this.confirmCode()}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    confirmCode(){
        this.props.confirm(this.props.phoneNumber, this.state.confirmationCode)
    }
}