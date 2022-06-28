import React from 'react';
import s from './Skills.module.scss';
import {Skill} from './skill/Skill';
import {TitleCustom} from '../../common/com-components/TitleCustom/TitleCustom';
import {uId} from "../../utils/config";
const Fade = require("react-reveal/Fade");

const skills = [
  {
    id: uId(),
    url: '/CV/img/js.png',
    header: 'JS',
  },
  {
    id: uId(),
    url: '/CV/img/react.png',
    header: 'React',
  },
  {
    id: uId(),
    url: '/CV/img/redux.png',
    header: 'Redux',
  },
  {
    id: uId(),
    url: '/CV/img/type_script.png',
    header: 'TypeScript',
  },
  {
    id: uId(),
    url: '/CV/img/css.png',
    header: 'CSS',
  },
  {
    id: uId(),
    url: '/CV/img/html.svg',
    header: 'HTML',
  },
  {
    id: uId(),
    url: '/CV/img/sass.png',
    header: 'Sass',
  },
  {
    id: uId(),
    url: '/CV/img/node_js.png',
    header: 'Node.js',
  },
  {
    id: uId(),
    url: '/CV/img/mongo.png',
    header: 'mongoDB',
  },
]

export const Skills = () => {
  return (
    <div id={'Skills'} className={s.skillsContainer}>
      <Fade bottom>
        <TitleCustom title={'Skills'} costumeStyle={s.skillTitle}/>
        <div className={`${s.skillsItem}`}>
          {skills.map(el => {
            return <Skill key={el.id}
                          header={el.header}
                          url={el.url}/>
          })}
        </div>
      </Fade>
    </div>
  );
};

