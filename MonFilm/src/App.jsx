/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routers/routers";

const App = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={childRoute.element}
                  index={childRoute.index}
                />
              ))}
          </Route>
        );
      })}
    </Routes>
  );
};

export default App;
