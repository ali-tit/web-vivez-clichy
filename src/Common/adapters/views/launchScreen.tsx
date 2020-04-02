import React, { PureComponent } from 'react'
import './css/launchScreen.css';

interface State {
    progressBar: number
}

export class LaunchScreen extends PureComponent<any, State> {

    animator: any

    constructor(props: any) {
        super(props)
        this.state = {
            progressBar: 0
        }
    }

    componentDidMount() {
        this.animator = setInterval(() => {
            this.setState({ progressBar: this.state.progressBar + 5 }, () => {
                if (this.state.progressBar === 100) {
                    clearInterval(this.animator)
                    this.animator = null
                }
            })
        }, 100)
    }

    render() {
        return (
            <div className={'container'}>
                {/*
                <img className={'logoImage'} src={require('../../../../assets/img/VC-logo_header.png')}/>
                <img className={'mapImage'}
                     src={require('../../../../assets/img/splash_cropped.png')}/>
                */
                }

                <h2 className={'welcomeText'}>Vivez l'instant</h2>
                <div className={'progressBar'} style={{ width: this.state.progressBar + '%' }}/>
            </div>
        )
    }
}

