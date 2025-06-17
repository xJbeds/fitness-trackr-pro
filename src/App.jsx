import { usePage } from "./layout/PageContext";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  <Routes>
    <Route element={<App />}>
      <Route index element={<Login />} />
      <Route path="./Layout" element={<Layout />} />
      <Route path="./Navbar" element={<Navbar />} />
      <Route path="/*" element={<Error404 />} />
    </Route>
  </Routes>;

  // const { page } = usePage();

  // if (page === "register") return <Register />;
  // if (page === "login") return <Login />;
  // if (page === "activities") return <ActivitiesPage />;

  return <Error404 />;
}
