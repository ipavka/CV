import React from 'react';
import s from './Navbar.module.css';
import sContainer from '../../../common/styles/Container.module.css';

export const Navbar = () => {
    return (
        <div className={`${sContainer.container} ${s.mainNav}`}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Project</a>
            <a href="#">Contacts</a>
            {/*<div className="contacts">*/}
            {/*    <div className="contacts li">*/}
            {/*        <img className="icon" src="/img/telegram-brands.svg" alt="Telegram"/>*/}
            {/*        <a className="text-bullet" href="https://t.me/ipavka" target="_blank">t.me/ipavka</a>*/}
            {/*    </div>*/}
            {/*    <div className="contacts li">*/}
            {/*        <img className="icon" src="/img/envelope-solid.svg" alt="email"/>*/}
            {/*        <span className="text-bullet">ipavka@ya.ru</span>*/}
            {/*    </div>*/}
            {/*    <div className="contacts li">*/}
            {/*        <img className="icon" src="/img/github-brands.svg" alt="GitHub"/>*/}
            {/*        <a className="text-bullet" href="https://github.com/ipavka"*/}
            {/*           target="_blank">github.com/ipavka</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

