import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Question from './pages/Questions';
import Result from './pages/Result';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/question" component={Question} />
            <Route path="/result" component={Result}/>
        </BrowserRouter>
    );
}
export default Routes