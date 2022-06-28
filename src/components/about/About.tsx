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
            <ul className={s.ulList}>
              <li>
                Бизнес-ориентированность, клиентоориентированность, понимание приоритетов (важных на данный момент
                задач)
                бизнеса и первоочередность процессов.
              </li>
              <li>
                Умение общаться, договариваться, знакомится и находить подход к разным людям, работать в больших и малых
                коллективах.
              </li>
              <li>
                Умение находить решение из разных и очень интересных, забавных, сложных сложившихся ситуаций связных с
                рабочими процессами, людьми(сотрудниками, партнерами, клиентами).
              </li>
              <li>
                Адекватная реакция на конструктивную критику.
              </li>
              <li>
                Всегда есть желание, время и интерес к новым знаниям, навыкам, технологиям.
              </li>
              <li>
                Есть опыт руководства, делегирования, обучения.
              </li>
              <li>
                Знание Английского языка на уровне чтения и понимания тех. документации.
              </li>
            </ul>
          </h3>
          <div className={s.blockLinks}>
            <NavLink to={PATH.PROJECTS} className={s.link}>
              Projects
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
