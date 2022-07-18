import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages";
import DetailMovie from "../pages/detailMovie";
import FavoriteMovie from "../pages/favoriteMovie";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:movie_id" element={<DetailMovie />} />
        <Route path="/favorite" element={<FavoriteMovie />} />
        {/* <Route path="*" element={} /> */}
      </Routes>
    </Router>
  );
}
