import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import '../../styles/components/pages/ReadingsPage.scss';

export const ReadingsPage = (props) => {
  const { t } = useTranslation('common');
    return (
        <div className="Readings-page">
            <h2>
            FURTHER READING
            </h2>
            <p>
Real world stories of FB engineers abusing access to data, including stalking and harassing first dates:
</p>
<Link to="https://www.theguardian.com/technology/2018/may/02/facebook-engineer-fired-alleged-stalker-tinder">Facebook engineer stalks date</Link>
<Link to="https://securityboulevard.com/2021/07/stalkers-ugly-truth-of-facebook-staff-abusing-private-data/">Facebook Staff abusing private data</Link>
<p>
On technology facilitated gender-based violence: 
</p>
<Link to="https://www.cigionline.org/publications/technology-facilitated-gender-based-violence-overview/"></Link>
<p>
On Legal remedies for Deep Fakes and technology facilitated gender-based violence and how state laws can lag behind the rapidly changing technology:
</p>
https://www.shouselaw.com/ca/defense/penal-code/647j4/
https://link.springer.com/article/10.1007/s12119-020-09738-0
https://www.technologyreview.com/2021/02/12/1018222/deepfake-revenge-porn-coming-ban/
https://www.lexology.com/library/detail.aspx?g=4700f977-4845-417b-834d-b3c06390ee27

        </div>
    ) 

};


ReadingsPage.defaultProps = {
    renderSidebar: false,
    dispatch: null,
  };
  
  ReadingsPage.propTypes = {
    renderSidebar: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  
  export default ReadingsPage;