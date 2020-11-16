import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Question from './pages/Questions';
import Result from './pages/Result';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/question/:category_id" component={Question} />
                <Route path="/result" component={Result}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes