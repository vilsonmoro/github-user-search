import Catalog from "pages/Catalog";
import Detail from "pages/Detail";
import Home from "pages/Home";


import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/catalog">
                <Catalog />
            </Route>

            <Route path="/movie">
                <Detail />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;