import { useState, useEffect } from "react";
import Gallery from "../gallery/Gallery";
import City1 from "./citiesImages/citie1.jpg";
import City2 from "./citiesImages/citie2.jpg";
import City3 from "./citiesImages/citie3.jpg";
import City4 from "./citiesImages/citie4.jpg";

const citiesImages = [
  { src: City1, alt: "City Image 1" },
  { src: City2, alt: "City Image 2" },
  { src: City3, alt: "City Image 3" },
  { src: City4, alt: "City Image 4" },
];

const Cities = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      //PROMISE ALL prende tutte le promesse (foto da caricare in questo caso)
      //e aspetta che vengano risolte
      //PROMISE.ALL VIENE USATO PER CARICARE RISORSE COME LE IMMAGINI

      return Promise.all(
        citiesImages.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.src;
            //ONLOAD immagine caricata con successo
            img.onload = resolve;
            //ONERROR immagine rifiutata
            img.onerror = reject;
          });
        })
      );
    };

    preloadImages()
      .then(() => {
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error preloading images", error);
      });
  }, []);

  if (!loaded) {
    return <div>Loading Images...</div>;
  }

  return <Gallery title="Cities" images={citiesImages} />;
};

export default Cities;
