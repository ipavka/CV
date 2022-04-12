import React from 'react';
import s from './Projects.module.css';
import sContainer from '../../common/styles/Container.module.css';
import sItem from '../../common/styles/Item.module.css';
import {Project} from "./project/Project";

const projects = [
    {
        id: 1,
        url: '/',
        header: 'My Facebook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },
    {
        id: 2,
        url: '/',
        header: 'My Twitter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },

]

export const Projects = () => {
    return (
        <div className={`${sContainer.container} ${s.projectContainer}`}>
            <h1>My Project</h1>
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

