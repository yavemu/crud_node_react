import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';

import User from './User';
import UserNew from './UserNew';
import UserEdit from './UserEdit';

function App() {
  return (
  <Router>
    <Fragment>
      <Header/>
        <div className="container bg-light p-5">
          <Switch>
            <Route exact path="/" component={User} />
            <Route exact path="/user/new" component={UserNew} />
            <Route exact path="/user/edit/:id" component={UserEdit} />
          </Switch>
        </div>
    </Fragment>
  </Router>
  );
}

export default App;
