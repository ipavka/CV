import React from 'react';
import s from './Navbar.module.css';
import sContainer from '../../../common/styles/Container.module.css';

export const Navbar = () => {
    // ToDo: make as here https://ssivenkov.github.io/Portfolio/
    return (
        <div className={`${sContainer.container} ${s.mainNav}`}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Project</a>
            <a href="#">Contacts</a>
        </div>
    );
};

