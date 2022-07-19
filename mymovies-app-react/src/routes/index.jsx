import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages";
import DetailMovie from "../pages/detailMovie";
import FavoriteMovie from "../pages/favoriteMovie";

import { ThemeContext } from "../utils/context";
import { reduxAction } from "../utils/redux/actions/action";

export default function AppRouter() {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("light");
  const themeMode = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(reduxAction("ADD_FAVORITE", JSON.parse(getMovies)));
    }
  }, []);
  return (
    <ThemeContext.Provider value={themeMode}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:movie_id" element={<DetailMovie />} />
          <Route path="/favorite" element={<FavoriteMovie />} />
          {/* <Route path="*" element={} /> */}
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}
