import React from 'react';
import s from "./About.module.scss";
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";

export const About = () => {
  return (
    <div className={s.aboutMain}>
      <TitleCustom title={'About'} costumeStyle={s.aboutTitle}/>
      <div className={s.aboutContent}>
        <h3>
          I am a front-end developer. I have experience in creating SPA and dynamic web-interfaces. I use the following
          tech
          stack: React, TypeScript/JavaScript, Redux.
        </h3>
      </div>
    </div>
  );
};
