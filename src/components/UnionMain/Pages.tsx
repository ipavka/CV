import {Navigate, Route, Routes} from "react-router-dom";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Error404} from "../Error404/Error404";
import {Contacts} from "../contacts/Contacts";
import {About} from "../about/About";

export const PATH = {
  PROJECTS: "/projects",
  SKILLS: "/skills",
  CONTACTS: "/contacts",
  ABOUT: "/about",
  ERROR404: "/error404",
};

export const Pages = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={PATH.PROJECTS}/>}/>
      <Route path={PATH.SKILLS} element={<Skills/>}/>
      <Route path={PATH.PROJECTS} element={<Projects/>}/>
      <Route path={PATH.CONTACTS} element={<Contacts/>}/>
      <Route path={PATH.ABOUT} element={<About/>}/>
      <Route path={PATH.ERROR404} element={<Error404/>}/>
      <Route path={"*"} element={<Navigate to={PATH.ERROR404}/>}/>
    </Routes>
  );
};
