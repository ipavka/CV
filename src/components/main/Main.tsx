import React, {useEffect} from 'react';
import s from './Main.module.scss';
import sContainer from '../../common/styles/Container.module.scss';
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {useLocation} from 'react-router-dom';
import {switchAboutMeAC} from "../../store/form-reducer";

const Bounce = require("react-reveal/Bounce");

export const Main = () => {

  const location = useLocation();
  const dispatch = useAppDispatch();
  const isAboutMe = useAppSelector<boolean>(state => state.form.isAboutMe);

  useEffect(() => {
    if (location.pathname === '/about') {
      dispatch(switchAboutMeAC(false));
    }
    return () => {
      dispatch(switchAboutMeAC(true));
    };
  }, [location])

  return (
    <div id={'Main'} className={`${sContainer.container} ${s.mainBlock}`}>
      <div className={s.container}>
        <div className={s.photo}>
          <img src="/CV/img/mainLogo.png" alt="ava_1"/>
        </div>
        <Bounce left opposite collapse when={isAboutMe}>
          <TitleCustom title={'about me'} hLevel={4} costumeStyle={s.mainAboutTitle}/>
        </Bounce>
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

      </div>
      {isAboutMe &&
        <div className={s.mainAboutContent}>
          <h3>
            I am a Frontend developer. I have experience developing a SPA application with a dynamic interface using
            React, TypeScript, JavaScript, Redux. I would like to find a permanent job in a company with a modern
            approach
            to development and a friendly team. There is also an interest in studying Backend technologies in
            languages
            such as node.js, python
          </h3>
        </div>
      }
    </div>
  );
};
