import React from 'react';
import s from './Skills.module.css';
import sContainer from '../../common/styles/Container.module.css';

export const Skills = () => {
    return (
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
            <h1>Skills</h1>
            <div>
                <img src="/img/telegram-brands.svg" alt='foto'/>
                <h1>Header</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, rerum.</p>
            </div>
            <h1>Skills</h1>
        </div>
    );
};

