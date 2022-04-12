import React from 'react';
import s from './Skill.module.css';

type SkillPropsType = {
    id?: number
    url: string
    header: string
    description: string
}
export const Skill: React.FC<SkillPropsType> = props => {
    return (
        <div className={s.skillBlock}>
            <div className={s.item}>
                <img src={props.url} alt='foto'/>
                <h1>{props.header}</h1>
                <span>{props.description}</span>
            </div>

        </div>
    );
};

