import React from 'react';
import s from "./UnionMain.module.scss";
import {NavMenu} from "./NavMenu/NavMenu";
import {Pages} from "./Pages";

export const UnionMain = () => {
  return (
    <div className={s.mainBlock}>
      <NavMenu/>
      <Pages/>
    </div>
  );
};
