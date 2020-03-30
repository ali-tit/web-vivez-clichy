import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteProps } from "react-router";


export interface Props extends RouteProps {
    isAuthenticated: boolean
}

export class PrivateArea extends Route<Props> {
    public render() {
        let redirectPath: string = '';
        if (!this.props.isAuthenticated) {
            redirectPath = '/register';
        }

        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{ pathname: redirectPath }}/>);
            return <Route {...this.props} component={renderComponent} render={undefined}/>;
        } else {
            return <Route {...this.props}/>;
        }
    }
}