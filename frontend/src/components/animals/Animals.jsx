import { useEffect, useState } from "react";
import Gallery from "../gallery/Gallery";
import Animal1 from "./animalsImages/animal1.jpg";
import Animal2 from "./animalsImages/animal2.jpg";
import Animal3 from "./animalsImages/animal3.jpg";
import Animal4 from "./animalsImages/animal4.jpg";

const animalsImages = [
  {
    src: Animal1,
    alt: "Animal Image 1",
  },
  {
    src: Animal2,
    alt: "Animal Image 2",
  },
  {
    src: Animal3,
    alt: "Animal Image 3",
  },
  {
    src: Animal4,
    alt: "Animal Image 4",
  },
];

const Animals = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      return Promise.all(
        animalsImages.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.src;
            img.onload = resolve;
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
    return <div>Loading Animals...</div>;
  }

  return <Gallery title="Animals" images={animalsImages} />;
};

export default Animals;
