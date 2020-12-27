import React from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
       
        <div className="Logo">
            <p>Logo</p>
        </div>
        <div className="Auth">
        {!props.isAuthenticated
            ? <NavigationItem link="/SignUp">SignUp</NavigationItem>
            : <NavigationItem link="/SignIn">SignIn</NavigationItem>}
             {!props.isAuthenticated
            ? <NavigationItem link="/SignIn">SignIn</NavigationItem>
            : <NavigationItem link="/SignUp">SignUp</NavigationItem>}
        </div>
        
    </ul>
);

export default navigationItems;