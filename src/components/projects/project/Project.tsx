import React from 'react';
import s from './Project.module.scss';
import {TitleCustom} from "../../../common/com-components/TitleCustom/TitleCustom";
import {NavLink} from "react-router-dom";
import {PATH} from "../../UnionMain/Pages";
import {LinkBlock} from "./linkBlock/LinkBlock";

type ProjectPropsType = {
  imgUrl: string
  gitHubUrl: string
  projectLinkUrl: string
  backImg: { backgroundImage: string }
  header: string
  description: string
  title: string
}
export const Project: React.FC<ProjectPropsType> = props => {
  return (
    <div className={s.projectBlock}>
      <div className={s.urlProjectContent} style={props.backImg}>
        <NavLink to={PATH.PROJECTS + props.title} className={s.viewBtn}>more</NavLink>
      </div>
      <NavLink to={PATH.PROJECTS + props.title} className={s.descriptionLink}>
        <TitleCustom hLevel={2} title={props.header} costumeStyle={s.title}/>
      </NavLink>
      <span>{props.description}</span>
      <LinkBlock projectLinkUrl={props.projectLinkUrl} gitHubUrl={props.gitHubUrl}/>
    </div>
  );
};

