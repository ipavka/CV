import React from 'react';
import s from './Skills.module.scss';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import {Skill} from './skill/Skill';
import {TitleCustom} from '../../common/com-components/TitleCustom';

const skills = [
    {
        id: 1,
        url: '/CV/img/js.png',
        header: 'JS',
    },
    {
        id: 2,
        url: '/CV/img/react.png',
        header: 'React',
    },
    {
        id: 3,
        url: '/CV/img/redux.png',
        header: 'Redux',
    },
    {
        id: 4,
        url: '/CV/img/type_script.png',
        header: 'TypeScript',
    },
    {
        id: 5,
        url: '/CV/img/css.png',
        header: 'CSS',
    },
    {
        id: 6,
        url: '/CV/img/html.svg',
        header: 'HTML',
    },
    {
        id: 7,
        url: '/CV/img/sass.png',
        header: 'Sass',
    },
    {
        id: 8,
        url: '/CV/img/node_js.png',
        header: 'Node.js',
    },
    {
        id: 9,
        url: '/CV/img/mongo.png',
        header: 'mongoDB',
    },
]

export const Skills = () => {
    return (
        <div className={`${sContainer.container} ${s.skillsContainer}`}>

            <TitleCustom title={'Skills'} costumeStyle={s.skillTitle}/>

            <div className={`${sItem.item} ${s.skillsItem}`}>
                {skills.map(el => {
                    return <Skill key={el.id}
                                  header={el.header}
                                  url={el.url}/>
                })}
            </div>

        </div>
    );
};

