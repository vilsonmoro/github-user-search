import Home from "pages/Home";
import Search from "pages/Home/Search";
import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;