import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import CacheBuster from '../components/CacheBuster';
import HomePage from '../components/pages/HomePage';
import AboutUsPage from '../components/pages/AboutUsPage';
import ReadingsPage from '../components/pages/ReadingsPage';
import StoryPage from '../components/pages/StoryPage';

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
              <Route path="/aboutUs" component={AboutUsPage} exact />
              <Route path="/readings" component={ReadingsPage} exact />
              <Route path="/:textCode" component={StoryPage} />
            </Switch>
          </PageContainer>
        </BrowserRouter>
      );
    }}
  </CacheBuster>
);
export default AppRouter;
