import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights.jsx";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Explore />
      </main>
    </>
  );
};

export default Home;