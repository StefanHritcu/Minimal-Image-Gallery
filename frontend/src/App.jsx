import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Nature from "./components/nature/Nature";
import Cities from "./components/cities/Cities";
import Animals from "./components/animals/Animals";
import Technology from "./components/technology/Technology";
import HomePage from "./components/Homepage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
