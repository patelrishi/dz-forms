import React, { useEffect, useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Loading from "../containers/Loading";
// components
const DashboardContainer = lazy(() => import("../containers/DashBoard"));
const NotFound = lazy(() => import("../containers/NotFound"));
// const LandingPage = lazy(() => import("../containers/LandingPage"));
const AuthContainer = lazy(() => import("../containers/AuthContainer"));

let PrivateRouteArr = [
  {
    component: <DashboardContainer />,
    path: "/dashboard",
    key: "dashboard",
  },
];
const Routers = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            {/* private routes */}
            {token !== null ? (
              PrivateRouteArr.map((elem) => (
                <Route
                  exact
                  path={elem.path}
                  element={elem.component}
                  key={elem.key}
                />
              ))
            ) : (
              <Route
                path="*"
                exact
                element={<Navigate to={`/login`} />}
                status={404}
              />
            )}
            <Route exact path="/register" element={<AuthContainer />} />
            <Route exact path="/login" element={<AuthContainer />} />

            {/* keet that last--- error 404 */}
            <Route path="*" exact element={<NotFound />} status={404} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;
