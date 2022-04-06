/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import packageJson from '../../package.json';

global.appVersion = packageJson.version;
/**
 * Validate versions of meta.json and package.json and return boolean based on it
 * @param {string} versionA version from meta.json
 * @param {string} versionB version from package.json
 * @returns {boolean} false if both are of same versions and true if version in meta.json is bigger
 */
const semverGreaterThan = (versionA, versionB) => {
  const versionsA = versionA.split(/\./g);
  const versionsB = versionB.split(/\./g);

  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());
    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};
/**
 * component that will force clear cache and reload the site
 */
export default class CacheBuster extends React.PureComponent {
  /**
   * Creating instance of this component
   * @param {Object} props the props that are passed to the component
   */
  constructor(props) {
    super(props);
    /**
     * initializing the state variables
     */
    this.state = {
      isLoading: true,
      isLatestVersion: false,
      refreshCacheAndReload: () => {
        console.log('Clearing cache and hard reloading . . .');
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then((names) => {
            names.forEach((name) => caches.delete(name));
          });
        }
        // delete browser cache and hard reload
        window.location.reload(true);
      },
    };
  }

  /**
   * Page life cycle method which fetches meta json to check the version in it
   * @returns {*} Updates state
   */
  async componentDidMount() {
    const meta = await axios.get('/meta.json');
    const latestVersion = meta.data.version;
    const currentVersion = global.appVersion;
    const shouldForceRefresh = semverGreaterThan(
      latestVersion,
      currentVersion,
    );
    if (shouldForceRefresh) {
      console.log(
        `There is a new version: ${latestVersion}. Should force refresh`,
      );
      this.setState({ isLoading: false, isLatestVersion: false });
    } else {
      console.log(
        `Already on the latest version: ${latestVersion}. No cache refresh needed.`,
      );
      this.setState({ isLoading: false, isLatestVersion: true });
    }
  }

  /**
   * Gets the state variables and return it to children
   * @returns {*} child component
   */
  render() {
    const { isLoading, isLatestVersion, refreshCacheAndReload } = this.state;
    const { children } = this.props;
    return children({
      isLoading,
      isLatestVersion,
      refreshCacheAndReload,
    });
  }
}

CacheBuster.propTypes = {
  children: PropTypes.func.isRequired,
};

/*
The code found within this file, i.e. CacheBuster.js, is used under the MIT license

The MIT License (MIT)

Copyright (c) 2019 Dineshkumar Pandiyan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
