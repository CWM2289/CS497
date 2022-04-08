import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import '../../styles/components/pages/AboutUsPage.scss';

export const AboutUsPage = (props) => {
  const { t } = useTranslation('common');
    return (
        <div className="AboutUs-page">
            <h2>About Us</h2>
            <p>
                
            </p>
        </div>
    ) 

};


AboutUsPage.defaultProps = {
    renderSidebar: false,
    dispatch: null,
  };
  
  AboutUsPage.propTypes = {
    renderSidebar: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  
  export default AboutUsPage;