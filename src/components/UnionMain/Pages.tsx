import {Navigate, Route, Routes} from "react-router-dom";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Error404} from "../Error404/Error404";

export const PATH = {
  PROJECTS: "/projects",
  SKILLS: "/skills",
  ERROR404: "/error404",
};

export const Pages = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={PATH.PROJECTS}/>}/>
      <Route path={PATH.SKILLS} element={<Skills/>}/>
      <Route path={PATH.PROJECTS} element={<Projects/>}/>
      <Route path={PATH.ERROR404} element={<Error404/>}/>
      <Route path={"*"} element={<Navigate to={PATH.ERROR404}/>}/>
    </Routes>
  );
};
