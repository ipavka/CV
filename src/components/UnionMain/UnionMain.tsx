import React from 'react';
import s from "./UnionMain.module.scss";
import {NavMenu} from "./NavMenu/NavMenu";
import {Projects} from "../projects/Projects";

export const UnionMain = () => {
  return (
    <div className={s.mainBlock}>
      <NavMenu/>
      <Projects/>
    </div>
  );
};
