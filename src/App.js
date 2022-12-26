import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoLayout } from "./layouts";
import { publicRoutes } from "./routes";

const App = () => {
  return (
    <div className="__havanduoc">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || NoLayout;
            const Page = route.page;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
