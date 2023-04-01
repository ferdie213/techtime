import React from "react";

import HeaderSection from "./components/header/Header.jsx";
import { SectionTwo } from "./components/section-two/SectionTwo.jsx";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { CardList } from "./components/card-list/card-list";
import { SectionThree } from "./components/section-three/SectionThree.jsx";
import { FAQ } from "./components/FAQ/FAQ.jsx";
import { Footer } from "./components/footer/Footer.jsx";

import { courses } from "./components/data.js";
import { testimonies } from "./components/data.js";


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <HeaderSection />
      <SectionTwo />
      <CardList courses={courses} testimonies={testimonies} />
      <SectionThree />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
