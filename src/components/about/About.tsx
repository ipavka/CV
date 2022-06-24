import React from 'react';
import s from "./About.module.scss";
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";
import {NavLink} from "react-router-dom";
import {PATH} from "../UnionMain/Pages";

const Fade = require("react-reveal/Fade");

export const About = () => {
  return (
    <div className={s.aboutMain}>
      <Fade bottom>
        <TitleCustom title={'About'} costumeStyle={s.aboutTitle}/>
        <div className={s.aboutContent}>
          <h3>
            I am a Frontend developer. I have experience developing a SPA application with a dynamic interface using
            React, TypeScript, JavaScript, Redux. I would like to find a permanent job in a company with a modern
            approach
            to development and a friendly team. There is also an interest in studying Backend technologies in languages
            such as node.js, python
          </h3>
          <div className={s.blockLinks}>
            <NavLink to={PATH.PROJECTS} className={s.link}>
              Project
            </NavLink>
            <NavLink to={PATH.SKILLS} className={s.link}>
              Skills
            </NavLink>
            <a className={s.link}
               href="https://github.com/i-pavka" target="_blank"
            >GitHub</a>
          </div>
        </div>
      </Fade>
    </div>
  );
};
