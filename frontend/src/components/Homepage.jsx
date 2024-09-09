import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Ottimizzazione Avanzata delle Performance in React</h1>
        <p>
          Scopri tecniche avanzate come il Lazy Loading, Code Splitting,
          Prefetching, Preloading, e React Helmet per migliorare
          l&apos;esperienza utente e le performance della tua applicazione.
        </p>
      </header>

      <main>
        <article className="card-container">
          <section className="card">
            <h2>Cos&apos;è il Lazy Loading?</h2>
            <p>
              Il <strong>lazy loading</strong> è una tecnica essenziale per
              ottimizzare le performance di un sito web. Consente di caricare
              immagini, video o componenti della pagina solo quando
              l&apos;utente li scorre o li vede nella finestra di
              visualizzazione. Questa tecnica è cruciale per migliorare i tempi
              di caricamento della pagina iniziale e ridurre il consumo di
              risorse.
            </p>
            <p>
              Un esempio pratico è il caricamento delle immagini in un lungo
              articolo o pagina e-commerce. Le immagini vengono caricate solo
              quando l&apos;utente scorre verso di esse, risparmiando banda e
              accelerando la navigazione.
            </p>
          </section>

          <section className="card">
            <h2>Code Splitting</h2>
            <p>
              Il <strong>code splitting</strong> è un&apos;altra tecnica chiave
              utilizzata in React. Consiste nel suddividere il codice
              dell&apos;applicazione in parti più piccole e caricabili
              dinamicamente. Invece di caricare tutto il codice
              dell&apos;applicazione all&apos;inizio, si caricano solo le parti
              necessarie in base alla pagina o sezione richiesta
              dall&apos;utente.
            </p>
            <p>
              Questo approccio riduce il carico iniziale della pagina e migliora
              i tempi di caricamento, offrendo una migliore esperienza utente,
              specialmente per le applicazioni più grandi o complesse.
            </p>
          </section>

          <section className="card">
            <h2>Prefetching e Preloading</h2>
            <p>
              <strong>Prefetching</strong> e <strong>preloading</strong> sono
              tecniche di ottimizzazione che migliorano ulteriormente le
              performance. Il prefetching carica risorse che potrebbero essere
              necessarie in futuro, come ad esempio una pagina a cui
              l&apos;utente potrebbe accedere subito dopo la pagina corrente.
            </p>
            <p>
              Il preloading, invece, carica risorse essenziali per la pagina
              attuale. Questo permette di preparare elementi critici come script
              o stili CSS in anticipo, riducendo i tempi di attesa e offrendo
              un&apos;esperienza fluida.
            </p>
          </section>

          <section className="card">
            <h2>React Helmet</h2>
            <p>
              <strong>React Helmet</strong> è una libreria per gestire i
              metadati del documento HTML nelle applicazioni React. Permette di
              aggiornare dinamicamente elementi come il titolo della pagina e la
              meta descrizione.
            </p>
            <p>
              Con React Helmet, puoi ottimizzare la visibilità sui motori di
              ricerca e migliorare la condivisione sui social media, impostando
              facilmente i metadati rilevanti per ogni pagina o componente.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default HomePage;
