import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import './Common/assets/App.css';
import { reduxStore } from "./redux.config/store.redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateArea } from "./navigation/privateArea";
import { RouteComponentProps } from "react-router";
import { ProfileContainer } from "./Profile/adapters/views/profile.container";
import { PageNotFoundError } from "./Common/adapters/views/pageNotFound.error";
import { Registration } from "./Registration/adapters/views";

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
        //here goes the check if there is an authenticated user
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/register" component={Registration}/>
                        <PrivateArea component={ProfileContainer}
                                     path="/profile"
                                     isAuthenticated={this.state.hasSession}/>
                        <Route component={PageNotFoundError}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
