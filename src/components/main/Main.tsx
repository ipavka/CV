import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../common/styles/Container.module.scss';


export const Main = () => {
    return (
        <div id={'Main'} className={`${sContainer.container} ${s.mainBlock}`}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi their,</span>
                    <h3>I am Pavel</h3>
                    <h4>Frontend Developer</h4>
                </div>
                <div className={s.photo}>
                    <img src="/CV/img/mainLogo.png" alt="ava_1"/>
                </div>
            </div>

        </div>
    );
};
