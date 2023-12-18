import "./App.css";
import AboutAuthor from "./assets/components/Pages/AboutAuthor/AboutAuthor";
import AboutProject from "./assets/components/Pages/AboutProject/AboutProject";
import Movies from "./assets/components/Pages/Movies/Movies";
import Navbar from "./assets/components/Navbar/Navbar";
import NotFound from "./assets/components/Pages/NotFound/NotFound";
import MovieDetails from "./assets/components/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutProject />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/about" element={<AboutAuthor />}/>
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
