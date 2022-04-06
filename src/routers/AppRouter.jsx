import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import CacheBuster from '../components/CacheBuster';
import HomePage from '../components/pages/HomePage';

/**
 * Router wrapped with CacheBuster to refresh and reload
 * @returns {*} JSX
 */
const AppRouter = () => (
  <CacheBuster>
    {({ isLoading, isLatestVersion, refreshCacheAndReload }) => {
      if (isLoading) return null;
      if (!isLoading && !isLatestVersion) {
        refreshCacheAndReload();
      }
      const navItems = [];
      return (
        <BrowserRouter>
          <PageContainer navItems={navItems}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/text/:textCode" component={HomePage} />
            </Switch>
          </PageContainer>
        </BrowserRouter>
      );
    }}
  </CacheBuster>
);
export default AppRouter;
