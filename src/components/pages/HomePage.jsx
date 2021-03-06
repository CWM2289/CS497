import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import '../../styles/components/pages/HomePage.scss';

export const HomePage = (props) => {

  const { textCode } = useParams();
  const { t } = useTranslation('common');
    return (
        <div className="home-page">
          <div className="game-text">
            <Trans 
              t={t} 
              i18nKey={textCode ? textCode : 'start'}
              components={[
              <Link className="start-game" to={'/1'} />, 
            ]} 
            />
          </div> 
        </div>
    ) 
};


HomePage.defaultProps = {
    renderSidebar: false,
    dispatch: null,
  };
  
  HomePage.propTypes = {
    renderSidebar: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  
  export default HomePage;