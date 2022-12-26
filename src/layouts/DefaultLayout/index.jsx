import React from "react";
import { NavBar } from "~/components";

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
};

export default DefaultLayout;
