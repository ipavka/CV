import React from 'react';
import s from './Projects.module.css';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import {Project} from "./project/Project";
import {TitleCustom} from "../../common/com-components/TitleCustom";
import todoImage from '../../assets/image/todo_list.png'
import socialNet from '../../assets/image/social_network.png'

const projects = [
    {
        id: 1,
        url: todoImage,
        header: 'ToDo List',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        todoList: {backgroundImage: `url(${todoImage})`}
    },
    {
        id: 2,
        url: socialNet,
        header: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        todoList: {backgroundImage: `url(${socialNet})`}
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
                                    img={el.todoList}
                                    description={el.description}/>
                })}
            </div>
        </div>
    );
};

