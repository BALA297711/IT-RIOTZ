import React from "react";
import CountDown from "./components/countDown/CountDown";
import Events from "./components/events/Events";
import Hero from "./components/hero/Hero";
import Venue from "./components/venue/Venue";

function App() {
  return (
    <>
      <Hero />
      <Venue />
      <CountDown />
      <Events/>
    </>
  );
}

export default App;
