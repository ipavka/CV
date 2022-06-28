import React from 'react';
import sItem from '../../common/styles/Item.module.css';
import s from './Projects.module.scss';
import {Project} from "./project/Project";
import {TitleCustom} from "../../common/com-components/TitleCustom/TitleCustom";
import {projectsData} from "./projectData";

const Fade = require("react-reveal/Fade");

export const Projects = () => {
  return (
    <div id={"Project"} className={s.mainProjects}>
      <Fade bottom>
        <TitleCustom title={'My Projects'} costumeStyle={s.title}/>
        <div className={sItem.item}>
          {projectsData.map(el => {
            return <Project key={el.id}
                            id={el.id}
                            imgUrl={el.imgUrl}
                            gitHubUrl={el.gitHubUrl}
                            projectLinkUrl={el.projectLinkUrl}
                            header={el.header}
                            backImg={el.backImg}
                            description={el.description}/>
          })}
        </div>
      </Fade>
    </div>
  );
};

