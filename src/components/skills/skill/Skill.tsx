import React from 'react';
import s from './Skill.module.scss';

type SkillPropsType = {
    id?: string
    url: string
    header: string
}
export const Skill: React.FC<SkillPropsType> = props => {
    return (
        <div className={s.skillBlock}>
            <div className={s.item}>
                <img src={props.url} alt='photo'/>
                {/*<h3>{props.header}</h3>*/}
            </div>

        </div>
    );
};

