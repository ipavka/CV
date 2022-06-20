import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../common/styles/Container.module.scss';
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";


export const Main = () => {
  return (
    <div id={'Main'} className={`${sContainer.container} ${s.mainBlock}`}>
      <div className={s.container}>
        <div className={s.photo}>
          <img src="/CV/img/mainLogo.png" alt="ava_1"/>
        </div>
        <TitleCustom title={'about me'} hLevel={4} costumeStyle={s.mainAboutTitle}/>
      </div>

      <div className={s.text}>
        <h3>Pavel</h3>
        <h4>Frontend developer</h4>
      </div>

      <div className={s.bioLink}>
        <div className={s.bioItem}>
          <img src="/CV/img/telegram.png" alt="telegram"/>
          <a href="https://t.me/ipavka" target="_blank">Telegram</a>
        </div>
        <div className={s.bioItem}>
          <img src="/CV/img/email_1.png" alt="email"/>
          <a href="https://mail.google.com" target="_blank">ipavka@ya.ru</a>
        </div>
        <div className={s.bioItem}>
          <img src="/CV/img/github_2.png" alt="gitHub"/>
          <a href="#" target="_blank">GitHub</a>
        </div>
        {/*<div className={s.bioItem}>*/}
        {/*  <img src="/CV/img/phone_1.png" alt="phone"/>*/}
        {/*  <a href="#" target="_blank">8-978-999-99-99</a>*/}
        {/*</div>*/}

      </div>
      <div className={s.mainAboutContent}>
        {/*<TitleCustom title={'about me'} hLevel={4} costumeStyle={s.mainAboutTitle}/>*/}
        <h3>
          I am a Frontend developer. I have experience developing a SPA application with a dynamic interface using
          React, TypeScript, JavaScript, Redux. I would like to find a permanent job in a company with a modern approach
          to development and a friendly team. There is also an interest in studying Backend technologies in languages
          such as node.js, python
        </h3>
      </div>
    </div>
  );
};
