import React from 'react';

import  './Toolbar.css';

import NavigationItems from '../Navigation/NavigationItems/NavigationItems';


const toolbar = ( props ) => (
    <header className="Toolbar">
        
         <nav >
            <NavigationItems isAuthenticated={props.isAuth} />

        </nav>
    </header>
       
    
);

export default toolbar;