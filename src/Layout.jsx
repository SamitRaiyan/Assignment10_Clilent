import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './SharedItems/Header';
import Footer from './SharedItems/Footer';

const Layout = () => {
    return (
        <div>

            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;