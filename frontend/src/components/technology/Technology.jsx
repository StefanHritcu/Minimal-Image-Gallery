import { useEffect, useState } from "react";
import Gallery from "../gallery/Gallery";
import Tech1 from "./technologyImages/tech1.jpg";
import Tech2 from "./technologyImages/tech2.jpg";
import Tech3 from "./technologyImages/tech3.jpg";
import Tech4 from "./technologyImages/tech4.jpg";

const technologyImages = [
  {
    src: Tech1,
    alt: "Technology Image 1",
  },
  {
    src: Tech2,
    alt: "Technology Image 2",
  },
  {
    src: Tech3,
    alt: "Technology Image 3",
  },
  {
    src: Tech4,
    alt: "Technology Image 4",
  },
];

const Technology = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      return Promise.all(
        technologyImages.map((image) => {
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
    return <div>Loading Technology...</div>;
  }

  return <Gallery title="Technology" images={technologyImages} />;
};

export default Technology;
