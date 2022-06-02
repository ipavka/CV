import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../common/styles/Container.module.scss';


export const Main = () => {
  return (
    <div id={'Main'} className={`${sContainer.container} ${s.mainBlock}`}>
      <div className={s.container}>
        <div className={s.photo}>
          <img src="/CV/img/mainLogo.png" alt="ava_1"/>
        </div>
      </div>

      <div className={s.text}>
        <h3>Pavel</h3>
        <h4>Frontend Developer</h4>
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
    </div>
  );
};
