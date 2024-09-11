import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //MANUAL CHUNCKING

  //LA FUNZIONE SEGUENTE FA UNA COSA SEMPLICISSIMA: SE L'UTENTE VISITA LA PAGINA "NATURE", VITE CARICHERà
  //SOLTANTO IL COPOPNENTE NATURE ALTREIMENTI VITE SENZA IL MANUAL CHUNKLING CARICHEREBBE TUTTA L APP CON TUTTO IL CODICE RIDUCENDO LA VELOCITà.
  build: {
    rollupOptions: {
      output: {
        //ME ID SI INTENTE AL FILE/COMPONENTE(MODULO)
        manualChunks(id) {
          if (id.includes("nature")) {
            return "nature";
          }
          if (id.includes("cities")) {
            return "cities";
          }
          if (id.includes("animals")) {
            return "animals";
          }
          if (id.includes("technology")) {
            return "technology";
          }
        },
      },
    },
  },
});
