import React from "react";
import { StopWatch } from "../stopwatch/stopwatch";
import { HomeComponent } from "./home.component";

export const HomeContainer = () => {
  return (
    <>
      <HomeComponent></HomeComponent>
      <StopWatch></StopWatch>
    </>
  );
};
