import React from 'react';
import sContainer from '../../common/styles/Container.module.scss';
import sItem from '../../common/styles/Item.module.css';
import s from './Projects.module.css';
import {Project} from "./project/Project";
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";
import todoImage from '../../assets/image/todo_list.png'
import socialNet from '../../assets/image/social_network.png'

const projects = [
    {
        id: 1,
        imgUrl: todoImage,
        gitHubUrl: 'https://github.com/ipavka/ToDo_List',
        projectLinkUrl: 'https://github.com/ipavka/ToDo_List',
        header: 'ToDo List',
        description: 'React, Redux, TypeScript, JavaScript',
        backImg: {backgroundImage: `url(${todoImage})`}
    },
    {
        id: 2,
        imgUrl: socialNet,
        gitHubUrl: 'https://github.com/ipavka/samuraiWay_1.0',
        projectLinkUrl: 'https://github.com/ipavka/samuraiWay_1.0',
        header: 'Social Network',
        description: 'React, Redux, TypeScript, JavaScript',
        backImg: {backgroundImage: `url(${socialNet})`}
    },

]

export const Projects = () => {
    return (
        <div id={"Project"} className={`${sContainer.container} ${s.projectContainer}`}>
            <TitleCustom title={'My Project'} costumeStyle={s.title}/>

            <div className={sItem.item}>
                {projects.map(el => {
                    return <Project key={el.id}
                                    imgUrl={el.imgUrl}
                                    gitHubUrl={el.gitHubUrl}
                                    projectLinkUrl={el.projectLinkUrl}
                                    header={el.header}
                                    backImg={el.backImg}
                                    description={el.description}/>
                })}
            </div>
        </div>
    );
};

