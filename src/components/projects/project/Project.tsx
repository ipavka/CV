import React from 'react';
import s from './Project.module.scss';
import {TitleCustom} from "../../../common/com-components/TitleCustom/TitleCustom";

type ProjectPropsType = {
    id?: number
    imgUrl: string
    gitHubUrl: string
    projectLinkUrl: string
    backImg: { backgroundImage: string }
    header: string
    description: string
}
export const Project: React.FC<ProjectPropsType> = props => {
    return (
        <div className={s.projectBlock}>
            <div className={s.urlProjectContent} style={props.backImg}>
                <a className={s.viewBtn} href={props.imgUrl} target="_blank">Watch</a>
            </div>
            <TitleCustom hLevel={2} title={props.header} costumeStyle={s.title}/>
            <span>{props.description}</span>
            <div className={s.linkBlock}>
                <a href={props.gitHubUrl} target="_blank">
                    <img src='/CV/img/github.png' alt='github'/>
                </a>
                <a href={props.projectLinkUrl} target="_blank">
                    <img src='/CV/img/link.png' alt='link'/>
                </a>
            </div>
        </div>
    );
};

