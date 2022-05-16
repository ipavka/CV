import React from 'react';
import s from './Project.module.scss';

type ProjectPropsType = {
    id?: number
    url: string
    backImg: {backgroundImage: string}
    header: string
    description: string
}
export const Project: React.FC<ProjectPropsType> = props => {
    return (
        <div className={s.projectBlock}>
            <div className={s.urlProjectContent} style={props.backImg} >
                <a className={s.viewBtn} href={props.url} target="_blank">Watch</a>
            </div>
            <h2>{props.header}</h2>
            <span>{props.description}</span>
        </div>
    );
};

