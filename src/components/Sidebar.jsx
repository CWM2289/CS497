import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import propTypes from 'prop-types';
import gobackIcon from '../assets/icons/goback.png';
//import Logo from '../assets/icons/Logo.png'

import '../styles/components/Sidebar.scss';

/**
 * Sidebar component
 * @param {items} array Populates sidebar
 * @returns {JSX} JSX to render the component
 */
const Sidebar = ({ items, goBack, mainMenu }) => {
  const { t } = useTranslation('common');
  const history = useHistory();
  const location = useLocation();
  const textCodeTest = new RegExp("^/[0-9]+");

  const keyDown = (e, onClick) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  // function that renders horizontal line separating sections
  // only for item with URL and className = 'item-edit-final'
  // can also call without parameter to insert horzLine
  const renderHorzLine = (item = { className: 'title-edit' }) => (item.className.includes('title-edit') ? (
    <div className="side-bar__horz-container">
      <hr className="side-bar__horz-line" />
    </div>
  ) : (
    <></>
  ));

  const renderOnClick = (item, index) => (item.onClick ? (
    <div key={`not-on-click-${index}`}>
      <div
        className={`side-bar__${item.className}`}
        role="button"
        id={item.id}
        onKeyDown={(e) => keyDown(e, item.onClick)}
        onClick={() => item.onClick()}
        tabIndex="0"
      >
        {item.label}
      </div>
      {renderHorzLine(item)}
    </div>
  ) : (
    <div key={`on-click-${index}`}>
      <button
        type="button"
        className={`side-bar__${item.className}`}
        onClick={() => {
          if (item.url) history.push(item.url);
          if (item.ref) item.ref.current.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {item.label}
      </button>
      {renderHorzLine()}
    </div>
  ));

  return (
    <div className="side-bar">
      <div className="side-bar__container">
        {/* {<div className="side-bar__logo-container">
          <Logo type="CoopBannerWhite" />
        </div>} */}
        {textCodeTest.test(location.pathname) &&
          <div className="side-bar__text">
            <h2>Tech Dating Simulator</h2>
            <p>A choose your own story game about the abuse of power and the dangers women face on the internet</p>
          </div>
        }
        <div 
          style={!textCodeTest.test(location.pathname) ? {"marginTop": "12rem"} : {}} 
          className="side-bar__top-container"
        >
          <Link
            className={`side-bar__${items[0].className}`}
            to={items[0].url}
          >
            {items[0].label}
          </Link>
          <div className="side-bar__horz-container">
            <hr className="side-bar__horz-line-top" />
          </div>
        </div>
        {items.map((item, index) => index !== 0 && renderOnClick(item, index))}
        {
            goBack && (
              <div className="side-bar__goback-div">
                <img src={gobackIcon} alt="" />
                <button
                  id="goback-link"
                  type="button"
                  className="side-bar__goback"
                  onClick={history.goBack}
                >
                  Go Back
                </button>
              </div>
            )
          }
        <div className="side-bar__bottom-wrapper">
          {mainMenu && (
            <Link
              className="side-bar__main-menu"
              to="/"
            >
              {t('mainMenu')}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  mainMenu: false,
  items: [],
};

Sidebar.propTypes = {
  items: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.shape({
        id: propTypes.string,
        url: propTypes.string,
        label: propTypes.string,
        className: propTypes.string,
      }),
      propTypes.shape({
        id: propTypes.string,
        ref: propTypes.shape({ current: propTypes.elementType }),
        label: propTypes.string,
        className: propTypes.string,
      }),
    ]),
  ),
  goBack: propTypes.bool.isRequired,
  mainMenu: propTypes.bool,
};

export default Sidebar;
