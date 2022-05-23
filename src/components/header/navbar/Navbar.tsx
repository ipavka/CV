import React, {MouseEvent} from 'react';
import sContainer from '../../../common/styles/Container.module.scss';
import s from './Navbar.module.css';
import scrollIntoView from "scroll-into-view-if-needed";

export const Navbar = () => {

    const scrollHandler = (el: MouseEvent<HTMLDivElement>) => {
        const currentID = el.currentTarget.innerText;
        const element = document.getElementById(currentID);
        scrollIntoView(element!, {
            behavior: "smooth",
            block: "start",
        })
    }
    return (
        <div className={s.navMain}>

            <div className={s.navItem} onClick={scrollHandler}>
                <span>Main</span>
            </div>

            <div className={s.navItem} onClick={scrollHandler}>
                <span>Skills</span>
            </div>

            <div className={s.navItem} onClick={scrollHandler}>
                <span>Project</span>
            </div>

            <div className={s.navItem} onClick={scrollHandler}>
                <span >Contacts</span>
            </div>

        </div>
    );
};

