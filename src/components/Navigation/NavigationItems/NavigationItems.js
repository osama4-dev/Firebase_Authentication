import React from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
       
      
        {!props.isAuthenticated
            ? <NavigationItem link="/SignUp">SignUp</NavigationItem>
            : <NavigationItem link="/SignIn">SignIn</NavigationItem>}
             {!props.isAuthenticated
            ? <NavigationItem link="/SignIn">SignIn</NavigationItem>
            : <NavigationItem link="/SignUp">SignUp</NavigationItem>}
    </ul>
);

export default navigationItems;