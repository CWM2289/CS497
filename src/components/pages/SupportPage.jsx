import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Support } from 'kdc-component-library';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import authContext from '../../services/AuthService';
import Sidebar from '../Sidebar';
import '../../styles/components/pages/SupportPage.scss';

/** SupportPage component class */
export const SupportPage = (props) => {
  const [supportSidebar, setSupportSidebar] = useState(false);
  const { renderSidebar, dispatch } = props; // redux state
  const { t } = useTranslation('common');

  const supportContent = [{
    title: 'Frequently Asked Questions',
    content: [
      {
        question: 'Who can I contact if I have ideas for new features for the website?',
        answer: 'You can submit requests below and it will be sent to the product owner and development team for consideration.',
      },
      {
        question: 'What if I want to add a member to my team?',
        answer: 'They can be added by managers on the \'Teams\' tab.',
      },
      {
        question: 'My team is having trouble logging into the website.',
        answer: 'Make sure they are using their Active Directory credentials ending in.',
      },
    ],
  }];

  const items = [
    {
      id: t('viewAPlan'),
      onClick: () => undefined,
      label: t('viewAPlan'),
      className: 'top-item',
    },
    {
      id: t('editMyPlan'),
      onClick: () => undefined,
      label: t('editMyPlan'),
      className: 'top-item',
    },
    {
      id: t('createRunAReport'),
      onClick: () => undefined,
      label: t('createRunAReport'),
      className: 'top-item',
    },
    {
      id: t('createMyPlan'),
      onClick: () => undefined,
      label: t('createMyPlan'),
      className: 'top-item-final',
    },
    {
      id: 'Red Book App',
      label: 'Red Book App',
      className: 'landing-item',
    },
    {
      id: 'Support',
      url: '/support',
      label: 'Support',
      className: 'landing-item',
    },
    {
      id: 'Logout',
      label: 'Logout',
      right: true,
      onClick: () => authContext().logOut(),
      className: 'landing-item',
    },
    {
      id: 'Administration',
      label: 'Administration',
      className: 'landing-item',
    },
  ];

  useEffect(() => {
    setSupportSidebar(true);
    return () => {
      setSupportSidebar(false);
    };
  }, []);

  const sidebarClose = () => dispatch({ type: 'SIDEBAR' });

  return (
    <>
      {renderSidebar && supportSidebar && (
        <Sidebar
          closeSidebar={() => {
            sidebarClose();
          }}
          items={items}
        />
      )}
      <div className="support-page page-border-grey">
        <Support content={supportContent} />
      </div>
    </>
  );
};

SupportPage.defaultProps = {
  renderSidebar: false,
  dispatch: null,
};

SupportPage.propTypes = {
  renderSidebar: PropTypes.bool,
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  renderSidebar: state.sidebar.renderSidebar,
});

export default connect(mapStateToProps)(SupportPage);
