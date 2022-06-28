import React from 'react';
import s from './ProjectDescription.module.scss'
import {TitleCustom} from "../../../common/com-components/TitleCustom/TitleCustom";
import {NavLink, useParams} from "react-router-dom";
import {projectsData} from "../projectData";
import {LinkBlock} from "../project/linkBlock/LinkBlock";
import {PATH} from "../../UnionMain/Pages";

export const ProjectDescription = () => {

  const urlParams = useParams<'title'>();
  const projectItem = projectsData.find(el => el.title === urlParams.title);

  return (
    <div className={s.descriptionMain}>
      <TitleCustom title={projectItem ? projectItem.header : 'Description'} costumeStyle={s.title}/>
        <NavLink to={PATH.PROJECTS} className={s.linkBack}>
          <i></i>
          Back
        </NavLink>
        <div className={s.imgBlock}>
          <img src={projectItem?.imgUrl} alt='social_network'/>
          <h1 className={s.descriptionHeader}>
            Project Description Project <br/> Description
          </h1>
        </div>
      <div className={s.textInfoBlock}>
        {projectItem?.detailed}
      </div>
      <div className={s.descriptionLink}>
        <LinkBlock gitHubUrl={projectItem?.gitHubUrl}
                   projectLinkUrl={projectItem?.projectLinkUrl}/>
      </div>
    </div>
  );
};
