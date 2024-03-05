import css from "./ImageCard.module.css";

const ImageCard = ({ image, setLoader, onOpen }) => {

  const handleLoadGallery = () => {
    setLoader(false);
  };

  return (
    <div className={css.imageWrapper}>
      <img
        onLoad={handleLoadGallery}
        onClick={() => onOpen(image)}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
