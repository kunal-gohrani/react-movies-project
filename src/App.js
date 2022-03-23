import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
