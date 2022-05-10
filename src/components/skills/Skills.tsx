import React from 'react';
import s from './Skills.module.scss';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import {Skill} from './skill/Skill';
import {TitleCustom} from '../../common/com-components/TitleCustom';

const skills = [
    {
        id: 1,
        url: '/CV/img/html.svg',
        header: 'HTML',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
    {
        id: 2,
        url: '/CV/img/css.png',
        header: 'CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
    {
        id: 3,
        url: '/CV/img/js.png',
        header: 'JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
    {
        id: 4,
        url: '/CV/img/react.png',
        header: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dignissimos eligendi ipsa laboriosam nobis praesentium quos, sint tempore tenetur?'
    },
]

export const Skills = () => {
    return (
        <div className={`${sContainer.container} ${s.skillsContainer}`}>

            <TitleCustom title={'Skills'}/>

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

