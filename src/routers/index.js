import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../App';
/**
 * 初始化路径
 * @returns {*}
 */
const initRoute = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={App}/>
        </Switch>
    );
};

export default (<BrowserRouter>{initRoute()}</BrowserRouter>)
