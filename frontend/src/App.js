import React from "react";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.js"));
const Courses = lazy(() => import("./pages/Courses.js"));
const Admin = lazy(() => import("./pages/Admin.js"));

const Routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/admin",
    exact: true,
    element: <Admin />,
  },
  {
    path: "/courses",
    exact: true,
    element: <Courses />,
  },
];

const App = () => {
  const routing = useRoutes(Routes);

  return <div>{routing}</div>;
};

export default App;
