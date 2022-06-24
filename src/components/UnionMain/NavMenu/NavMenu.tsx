import React from 'react';
import s from './NavMenu.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "../Pages";

export const NavMenu = () => {

  const getNavLinkStyle = (NavData: { isActive: boolean }) => {
    return NavData.isActive ? `${s.navItem} ${s.active}` : s.navItem;
  };

  return (
    <div className={s.navMain}>
      <div className={s.navContent}>

        <div>
          <NavLink to={PATH.PROJECTS} className={(NavData) => getNavLinkStyle(NavData)}>
            <span>Project</span>
          </NavLink>
        </div>

        <div>
          <NavLink to={PATH.SKILLS} className={(NavData) => getNavLinkStyle(NavData)}>
            <span>Skills</span>
          </NavLink>
        </div>

        <div>
          <NavLink to={PATH.ABOUT}
                   className={(NavData) => getNavLinkStyle(NavData)}>
            <span>About</span>
          </NavLink>
        </div>

        <div>
          <NavLink to={PATH.CONTACTS} className={(NavData) => getNavLinkStyle(NavData)}>
            <span>Contacts</span>
          </NavLink>
        </div>

      </div>
    </div>
  );
};
