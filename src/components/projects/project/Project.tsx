import React from 'react';
import s from './Project.module.scss';

type ProjectPropsType = {
    id?: number
    url: string
    header: string
    description: string
}
export const Project: React.FC<ProjectPropsType> = props => {
    return (
        <div className={s.projectBlock}>
            <div className={s.urlProjectContent}>
                <a href={props.url}>Watch</a>
            </div>
            <h2>{props.header}</h2>
            <span>{props.description}</span>
        </div>
    );
};

