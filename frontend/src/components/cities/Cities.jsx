import Gallery from "../gallery/Gallery";
import City1 from "./citiesImages/citie1.jpg";
import City2 from "./citiesImages/citie2.jpg";
import City3 from "./citiesImages/citie3.jpg";
import City4 from "./citiesImages/citie4.jpg";

const citiesImages = [
  {
    src: City1,
    alt: "City Image 1",
  },
  {
    src: City2,
    alt: "City Image 2",
  },
  {
    src: City3,
    alt: "City Image 3",
  },
  {
    src: City4,
    alt: "City Image 4",
  },
];

const Cities = () => {
  return <Gallery title="Cities" images={citiesImages} />;
};

export default Cities;
