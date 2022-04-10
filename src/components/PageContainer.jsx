import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/PageContainer.scss';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

/**
 * PageContainer component class
 * Includes Header, Footer, and anything else that may be consistent across the app
 */
 export const PageContainer = (props) => {
     const {navItems, children} = props;
     const history = useHistory();
  const location = useLocation();
  const [goBack, setGoBack] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const textCode = new RegExp("^/[0-9]+");

  const labels = [
    {
      label: 'Home',
      className: 'main',
      url: '/',
    },
    {
      label: 'Further Readings',
      className: 'item',
      url: '/readings',
    }
  ]

    const renderSidebar = () => {
        updateSidebarRender();
      };

      const updateSidebar = (loc) => {
        setGoBack(loc.pathname !== '/');
      };
    
      useEffect(() => {
        if (history) updateSidebar(history.location);
      }, []);
    
      if (history) {
        history.listen((loc) => {
          updateSidebar(loc);
        });
      }

      return (
        <div className="page-container">
          {!textCode.test(location.pathname) &&
            <div className="Header">
              <Header 
                  navItems={navItems} 
                  onMenuClick={() => renderSidebar()}
              />
            </div>}
          <Sidebar items={labels} goBack={goBack} mainMenu={mainMenu} />
          <div className="page-content">{children}</div>
          <div className="footer">
            <Footer namespace="common" />
          </div>
        </div>
      );
 };


 PageContainer.defaultProps = {
    children: null,
    updateSidebarRender: null,
  };
  
  PageContainer.propTypes = {
    children: PropTypes.node,
    navItems: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
    updateSidebarRender: PropTypes.func,
  };

  export default PageContainer;