import React from 'react';
import s from './NavMenu.module.scss'

export const NavMenu = () => {
  return (
    <div className={s.navMain}>
      <div className={s.navContent}>

        <div className={s.navItem}>
          <span>Main</span>
        </div>

        <div className={s.navItem}>
          <span>Skills</span>
        </div>

        <div className={s.navItem}>
          <span>Project</span>
        </div>

        <div className={s.navItem}>
          <span>Contacts</span>
        </div>

      </div>
    </div>
  );
};
