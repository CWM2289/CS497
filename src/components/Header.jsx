import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../public/images/logo.png';
import '../styles/components/Header.scss';

const Header = (props) => {
    const {navItems} = props;
    return (
        <div className="header">
        <img className="header__logo" src={logo} />
        <div className="header__top">

        </div>
        <div className="header__bottom">
            <ul className="header__options">
                {navItems && navItems.map((option) => 
                <li className="header__option-item">
                    {option}
                </li>)}
            </ul>
        </div>
        </div>
    )
}


export default Header;