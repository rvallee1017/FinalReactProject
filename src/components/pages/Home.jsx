import React from "react";
import Landing from "../Landing";
import Highlights from "../Highlights.jsx";
import Explore from "../ui/Explore";


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
