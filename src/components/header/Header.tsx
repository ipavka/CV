import React from 'react';
import sContainer from '../../common/styles/Container.module.scss';
import s from './Header.module.css';
import {Navbar} from './navbar/Navbar';


export const Header = () => {
    return (
        <div className={`${sContainer.container} ${s.mainHeader}`}>
            <Navbar/>
        </div>
    );
};

