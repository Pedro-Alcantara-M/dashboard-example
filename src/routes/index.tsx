import { Route, Routes } from "react-router-dom";
import Home from "@pages/home";

const RoutesElements = () => {
  return (
    <Routes>
      <Route path="/dashboard-example">
        <Route index element={<Home/>} />
      </Route>
      <Route path="/leaderboard">
        <Route index element={<h1>Test Leaderboard</h1>} />
      </Route>
    </Routes>
  );
};

export default RoutesElements;
