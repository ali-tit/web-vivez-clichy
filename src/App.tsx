import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import './Common/assets/App.css';
import { reduxStore } from "./redux.config/store.redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateArea } from "./navigation/privateArea";
import { RouteComponentProps, Redirect } from "react-router";
import { ProfileContainer } from "./Profile/adapters/views/profile.container";
import { PageNotFoundError } from "./Common/adapters/views/pageNotFound.error";
import { Registration } from "./Registration/adapters/views/registration";
import { Confirmation } from './Registration/adapters/views/confirmation';

const store = reduxStore()

interface Props extends RouteComponentProps {
}

interface State {
    hasSession: boolean
}

class App extends PureComponent<any, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            hasSession: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/confirmation" component={Confirmation}/>
                        <Route path="/register" component={Registration}/>
                        <PrivateArea component={ProfileContainer}
                                     path="/profile"
                                     isAuthenticated={this.state.hasSession}/>
                        <Redirect to={"/profile"}/>
                        <Route component={PageNotFoundError}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
