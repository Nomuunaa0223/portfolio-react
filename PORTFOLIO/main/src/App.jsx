import React from "react";
import Header from "./components/header/Header";
import Page2 from "./components/page2/Page2";
import MeProvider from "./components/context/MeProvider";
import "./App.css";
import Page3 from "./components/page3/Page3";
import Page5 from "./components/page5/Page5";
import Page6 from "./components/page4/Page6";


function App() {
  return (

    <MeProvider>
      <div className="app-container">
        <section id="home">
          <Header />
        </section>

        <section id="skills">
          <Page2 />
          <Page3 />
        </section>

        <section id="about">
          <Page6 />
        </section>

        <section id="contact">
          <Page5 />
        </section>
      </div>
    </MeProvider>
  );
}

export default App;
