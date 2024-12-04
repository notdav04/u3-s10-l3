import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainSection from "./components/MainSection";
import NewNavbar from "./components/NewNavbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <NewNavbar />
        <main className="pt-5" style={{ backgroundColor: "#221f1f" }}>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
