import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Tasks from './pages/Tasks';
import Users from './pages/Users';
import User from './pages/User';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Tasks } />
                <Route path="/users" exact component={ Users } />
                <Route path="/users/:id" component={ User }/>
            </Switch>
        </BrowserRouter>
    );
}