import Gallery from "../gallery/Gallery";
import Nature1 from "./natureImages/nature1.jpg";
import Nature2 from "./natureImages/nature2.jpg";
import Nature3 from "./natureImages/nature3.jpg";
import Nature4 from "./natureImages/nature4.jpg";

const natureImages = [
  {
    src: Nature1,
    alt: "Nature Image 1",
  },
  {
    src: Nature2,
    alt: "Nature Image 2",
  },
  {
    src: Nature3,
    alt: "Nature Image 3",
  },
  {
    src: Nature4,
    alt: "Nature Image 4",
  },
];

const Nature = () => {
  return <Gallery title="Nature" images={natureImages} />;
};

export default Nature;
