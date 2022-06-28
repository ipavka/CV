import React from 'react';
import s from './ProjectDescription.module.scss'
import {TitleCustom} from "../../../common/com-components/TitleCustom/TitleCustom";
import {useParams} from "react-router-dom";
import {projectsData} from "../projectData";


export const ProjectDescription = () => {

  const urlParams = useParams<'id'>();
  const projectItem = projectsData.find(el => el.id === urlParams.id);

  return (
    <div className={s.descriptionMain}>
      <TitleCustom title={projectItem ? projectItem.header : 'Description'} costumeStyle={s.title}/>
      <div className={s.imgBlock}>
        <img src={projectItem?.imgUrl} alt='social_network'/>
      </div>
      <div className={s.textInfoBlock}>
        {projectItem?.detailed}
      </div>
    </div>
  );
};
