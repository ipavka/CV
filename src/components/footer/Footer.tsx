import React from 'react';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import s from './Footer.module.scss';
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";
import img1 from '../../assets/image/telegram.png'

export const Footer = () => {
    return (
        <div className={`${sContainer.container} ${s.footerContainer}`}>
            <div className={`${sItem.item} ${s.footerItems}`}>
                <TitleCustom title={'Pavel Kopaev'} hLevel={2} costumeStyle={s.title}/>
                <div className={s.bioLink}>
                    <a href="#" style={{backgroundImage: `url(${img1})`}}/>
                    <a href="#"/>
                    <a href="#"/>
                    <a href="#"/>
                </div>
            </div>
        </div>
    );
};
