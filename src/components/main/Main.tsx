import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../common/styles/Container.module.scss';


export const Main = () => {
    return (
        <div className={`${sContainer.container} ${s.mainBlock}`}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi Their</span>
                    <h2>I am Sir Winston Churchill</h2>
                    <h5>Prime Minister of the United Kingdom</h5>
                </div>
                <div className={s.photo}>
                    <img src="/CV/img/mainLogo.png" alt="ava_1"/>
                </div>
            </div>

        </div>
    );
};
