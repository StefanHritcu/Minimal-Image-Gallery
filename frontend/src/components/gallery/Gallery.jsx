import "./Gallery.css";

const Gallery = ({ title, images }) => {
  return (
    <section className="gallery">
      <h2>{title}</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
