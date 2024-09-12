import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/Homepage";
import Footer from "./components/footer/Footer";
import { lazy, Profiler, Suspense } from "react";

const Nature = lazy(() => import("./components/nature/Nature"));
const Cities = lazy(() => import("./components/cities/Cities"));
const Animals = lazy(() => import("./components/animals/Animals"));
const Technology = lazy(() => import("./components/technology/Technology"));

const onRenderApp = (
  id, //Indentificatore del profiler, se ne utilizzi altri.
  phase, //Indica se il componente sta montando(Mount) o aggiornado(update).
  actualDuration, //Misura il tempo effettivo impiegato dal componente per il RENDERING.
  baseDuration, //Stima invece quanto tempo avrebbe impiegatyo il rendering senza ottimizzazioni come la memoizzazione.
  startTime, //Il timestamp di quando è iniziato il rendering.
  commitTime, //Il timestamp di quando il camibamento è stato confemrato e applicato al dom.
  interations //Un insieme di interazioni che sono state tracciate nel processo di rendering.
) => {
  console.log(`Profilo: ${id}`);
  console.log(`Fase: ${phase}`);
  console.log(`Durata effettiva: ${actualDuration}`); // TEMPO REALE
  console.log(`Durata base stimata: ${baseDuration}`); // TEMPO STIMATO
  console.log(`Inizion del Render: ${startTime}`);
  console.log(`Tempo di commit: ${commitTime}`);
  console.log(`Interazioni tracciate: ${interations}`);
};

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Profiler id="HomePage" onRender={onRenderApp}>
              <HomePage />
            </Profiler>
          }
        />
        <Route
          path="/nature"
          element={
            <Suspense fallback={<div>Loading Nature...</div>}>
              <Profiler id="Nature" onRender={onRenderApp}>
                <Nature />
              </Profiler>
            </Suspense>
          }
        />
        <Route
          path="/cities"
          element={
            <Suspense fallback={<div>Loading Cities...</div>}>
              <Profiler id="Cities" onRender={onRenderApp}>
                <Cities />
              </Profiler>
            </Suspense>
          }
        />
        <Route
          path="/animals"
          element={
            <Suspense fallback={<div>Loading Animals...</div>}>
              <Profiler id="Animals" onRender={onRenderApp}>
                <Animals />
              </Profiler>
            </Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <Suspense fallback={<div>Loading Technology...</div>}>
              <Profiler id="Technology" onRender={onRenderApp}>
                <Technology />
              </Profiler>
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
