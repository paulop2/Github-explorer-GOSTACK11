import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* :etc para falar q a rota é o depois da barra e o + significa TUDO dps da barra */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
