import React, { use } from 'react';
import ThemeContext from './ThemeContext';
import { Helmet } from 'react-helmet-async';

const ClientThemeWraper = ({children}) => {
    const {theme} = use(ThemeContext)
    return (
        <div data-theme={theme}>
            {children}
        </div>
    );
};

export default ClientThemeWraper;