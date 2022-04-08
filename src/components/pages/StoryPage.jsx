import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import '../../styles/components/pages/StoryPage.scss';

export const StoryPage = () => {

  const { textCode } = useParams();
  const { t } = useTranslation('common');
  const getPhoto = () => {try{return require(`../../assets/images/CS497-${textCode}.png`)} catch(err) {console.log(err)}}
  
    return (
        <div className="story-page">
          {textCode && 
          <div className="photo-container">
            <img 
              className="game-photo" 
              src={getPhoto()} 
              alt={t(`photo-${textCode}`)}
            />
          </div>}
          <div className="game-text">
            <Trans 
              t={t} 
              i18nKey={textCode ? textCode : 'start'}
              components={[
              <Link className="start-game" to={'/1'} />, 
              <Link className="start-game" to={'/2'} />,
              <Link className="start-game" to={'/3'} />,
            ]} 
            />
          </div> 
        </div>
    ) 

};


StoryPage.defaultProps = {
    renderSidebar: false,
    dispatch: null,
  };
  
  StoryPage.propTypes = {
    renderSidebar: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  
  export default StoryPage;