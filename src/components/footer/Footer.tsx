import React from 'react';
import s from './Footer.module.css';
import sContainer from '../../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.FooterContainer}`}>
                <h1>Footer</h1>
                <h1>Footer</h1>
            </div>

        </div>
    );
};
