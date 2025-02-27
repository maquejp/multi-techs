import React from "react";
import appEnv from "@/helpers/env";

const HomePage = () => {
  return <div>HomePage {appEnv.API_URL}</div>;
};

export default HomePage;
