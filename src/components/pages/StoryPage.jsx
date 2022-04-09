import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import '../../styles/components/pages/StoryPage.scss';

export const StoryPage = () => {

  const { textCode } = useParams();
  const { t } = useTranslation('common');
  const history = useHistory();
  const [selected, setSelected] = useState(0);
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
              i18nKey={textCode}
              components={[
              <button className="game-button" onClick={() => {
                history.push(`/${parseInt(textCode.toString()[0]) + 1}${textCode.toString().slice(1) !== '-1' ? textCode.toString().slice(1) : ''}`)
                setSelected(0);
              }} />,
              <button className="game-button" onClick={() => {
                history.push(`/${textCode}-1`)
                setSelected(0);
              }} />,
              <button className="game-button" onClick={() => setSelected('a')} />,
              <button className="game-button" onClick={() => setSelected('b')} />,
              <button className="game-button" onClick={() => {
                history.push(`/${parseInt(textCode.toString()[0]) + 1}${textCode.toString()[1]}1`)
                setSelected(0);
                }} 
              />,
              <button className="game-button" onClick={() => {
                history.push(`/${parseInt(textCode.toString()[0]) + 1}${textCode.toString()[1]}2`)
                setSelected(0);
                }}  />,
              <button className="game-button" onClick={() => {
                history.push(`/${parseInt(textCode.toString()[0]) + 1}${textCode.toString()[1]}3`)
                setSelected(0);
                }}  />,
            ]} 
            />
            {selected !== 0 && <Trans 
              t={t} 
              i18nKey={`${parseInt(textCode.toString()[0])}${textCode.toString().slice(1) !== '-1' ? textCode.toString().slice(1) : ''}-selected-${selected}`}
              components={[
              <button className="game-button" onClick={() => {
                history.push(`/${parseInt(textCode.toString()[0]) + 1}${textCode.toString().slice(1) !== '-1' ? textCode.toString().slice(1) : ''}${selected}`)
                setSelected(0);
              }} />, 
            ]} 
            />}
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