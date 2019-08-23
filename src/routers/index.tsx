import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom';
import App from '../App'
export default class AppRouter extends React.Component {
    public render() {
        return(
            <HashRouter>
                <Switch>
                    <Route path='/' component={App} />
                </Switch>           
            </HashRouter>
        )
    }
}