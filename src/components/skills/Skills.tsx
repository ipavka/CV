import React from 'react';
import s from './Skills.module.css';
import sContainer from '../../common/styles/Container.module.css';
import sItem from '../../common/styles/Item.module.css';
import {Skill} from "./skill/Skill";

const skills = [
    {
        id: 1,
        url: './img/html.svg',
        header: 'HTML',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
    {
        id: 2,
        url: './img/css.png',
        header: 'CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
    {
        id: 3,
        url: './img/js.png',
        header: 'JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
    {
        id: 4,
        url: './img/react.png',
        header: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
]

export const Skills = () => {
    return (
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
            <h1>Skills</h1>
            <div className={sItem.item}>
                {skills.map(el => {
                    return <Skill key={el.id}
                                  header={el.header}
                                  url={el.url}
                                  description={el.description}/>
                })}
            </div>

        </div>
    );
};

