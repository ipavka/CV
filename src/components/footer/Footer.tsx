import React from 'react';
import s from './Footer.module.css';
import sContainer from '../../common/styles/Container.module.css';
import sItem from '../../common/styles/Item.module.css';

export const Footer = () => {
    return (
        <div className={`${sContainer.container} ${s.footerContainer}`}>
            <div className={`${sItem.item} ${s.footerItems}`}>
                <h2>Pavel Kopaev</h2>
                <div className={s.bioLink}>
                    <a href="/"></a>
                    <a href="/"></a>
                    <a href="/"></a>
                    <a href="/"></a>
                </div>
                <span>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};
