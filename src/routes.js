import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Greetings from './componenets/Greetings';
import SignupPage from './componenets/SignupPage';
import App from './componenets/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={SignupPage}  />
    </Route>
)
