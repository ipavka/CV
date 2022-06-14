import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
import {UnionMain} from "./components/UnionMain/UnionMain";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";


export const App = () => (
  <div className="App">
    <Provider store={store}>
      <HashRouter>
        {/*<Header/>*/}
        <Main/>
        <UnionMain/>
        <Footer/>
      </HashRouter>
    </Provider>
  </div>
);
