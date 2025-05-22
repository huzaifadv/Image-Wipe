import React, { useState } from "react";
import "./App.css";
import BgRemover from "./components/BgRemover"
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";
import { TabsDemo } from "./components/TabsDemo";
// import { InfiniteMovingCardsDemo } from "./components/Feedback";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar/>
      <BgRemover />
      <Promo/> 
      {/* <InfiniteMovingCardsDemo/> */}
      <TabsDemo/> 
      <Footer/>
    </>
  )
}

export default App;
