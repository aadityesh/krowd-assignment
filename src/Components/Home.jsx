import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <>
      <Navigation title={"HackerRank"} />
      <div className="flex gap-14 justify-center pt-[80px]">
        <Link to={"/itemlist"}>
          <Button label={"Item List App"} />
        </Link>
      </div>
    </>
  );
};

export default Home;
