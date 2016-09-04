import React from 'react';
import { Route } from 'react-router';

import adminRoutes from './Areas/Admin/routes';
import postsRoutes from './Areas/Posts/routes';

export default (
  <Route>
    {adminRoutes}
    {postsRoutes}
  </Route>
);
