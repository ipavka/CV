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
        <div className={s.text}>
          <h3>Pavel</h3>
          <h4>Frontend Developer</h4>
        </div>
      </div>
      <div className={s.bioLink}>
        <div className={s.bioItem}>
          <a href="#"></a>
          Telegram
        </div>
        <div className={s.bioItem}>
          <a href="#"></a>
          Email
        </div>
        <div className={s.bioItem}>
          <a href="#"></a>
          GitHub
        </div>
        <div className={s.bioItem}>
          <a href="#"></a>
          Phone
        </div>
      </div>
    </div>
  );
};
