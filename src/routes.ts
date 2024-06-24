import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Heroes from "./pages/heroes/Heroes";
import Minions from "./pages/minions/MinionsList";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Minions,
      },
      {
        path: "/heroes",
        Component: Heroes,
      },
    ],
  },
]);

export default routes;
