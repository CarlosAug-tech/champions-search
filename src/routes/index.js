import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
