import { FC } from "react";
import { Outlet } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar/NavBar";

const App: FC = () => {
  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
