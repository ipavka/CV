import React from 'react';
import s from './Projects.module.css';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import {Project} from "./project/Project";
import {TitleCustom} from "../../common/com-components/TitleCustom";

const projects = [
    {
        id: 1,
        url: '#',
        header: 'My Facebook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },
    {
        id: 2,
        url: '#',
        header: 'My Twitter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },

]

export const Projects = () => {
    return (
        <div className={`${sContainer.container} ${s.projectContainer}`}>
            <TitleCustom title={'My Project'} costumeStyle={s.title}/>

            <div className={sItem.item}>
                {projects.map(el => {
                    return <Project key={el.id}
                                    url={el.url}
                                    header={el.header}
                                    description={el.description}/>
                })}
            </div>
        </div>
    );
};

