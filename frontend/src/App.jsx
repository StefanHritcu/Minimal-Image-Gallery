import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/Homepage";
import Footer from "./components/footer/Footer";
import { lazy, Suspense } from "react";

const Nature = lazy(() => import("./components/nature/Nature"));
const Cities = lazy(() => import("./components/cities/Cities"));
const Animals = lazy(() => import("./components/animals/Animals"));
const Technology = lazy(() => import("./components/technology/Technology"));

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/nature"
          element={
            <Suspense fallback={<div>Loading Nature...</div>}>
              <Nature />
            </Suspense>
          }
        />
        <Route
          path="/cities"
          element={
            <Suspense fallback={<div>Loading Cities...</div>}>
              <Cities />
            </Suspense>
          }
        />
        <Route
          path="/animals"
          element={
            <Suspense fallback={<div>Loading Animals...</div>}>
              <Animals />
            </Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <Suspense fallback={<div>Loading Technology...</div>}>
              <Technology />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
