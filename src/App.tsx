import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contractor} from "./components/contractor/Contractor";
import {Contacts} from "./components/contacts/Contacts";


function App () {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contractor/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
