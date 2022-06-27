import React from 'react';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import s from './Footer.module.scss';
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";
import telegramImg from '../../assets/image/telegram.png'
import email from '../../assets/image/email_1.png'
import gitHub from '../../assets/image/github_2.png'
import codewars from '../../assets/image/codewars_yellow.png'
const Fade = require("react-reveal/Fade");


export const Footer = () => {
  return (
    <div className={`${sContainer.container} ${s.footerContainer}`}>
      <Fade bottom>
        <div className={`${sItem.item} ${s.footerItems}`}>
          <TitleCustom title={'Pavel'} hLevel={2} costumeStyle={s.title}/>
          <div className={s.bioLink}>
            <a href="https://t.me/ipavka" target="_blank"
               style={{backgroundImage: `url(${telegramImg})`}}/>
            <a href="mailto:ipavka@ya.ru" target="_blank"
               style={{backgroundImage: `url(${email})`}}/>
            <a href="https://github.com/i-pavka" target="_blank"
               style={{backgroundImage: `url(${gitHub})`}}/>
            <a href="https://www.codewars.com/users/ipavka" target="_blank"
               style={{backgroundImage: `url(${codewars})`}}/>
          </div>
        </div>
      </Fade>
    </div>
  );
};
