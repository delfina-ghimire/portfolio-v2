import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "project-detail",
    element: <ProjectDetail />,
  },
]);

function App() {
  useEffect(() => {
    document.title = "delfina | Frontend Developer";
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
