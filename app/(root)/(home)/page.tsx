import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div className="flex-center">
      <UserButton />
    </div>
  );
};

export default Home;
