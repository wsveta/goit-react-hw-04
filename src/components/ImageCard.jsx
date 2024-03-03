import { useState } from "react";
import css from "./ImageCard.module.css";
import ImageModal from "./ImageModal";

const ImageCard = ({ image, setLoad }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleLoadGallery = () => {
    setLoad(false);
  };
  return (
    <div className={css.imageWrapper}>
      <img
        onLoad={handleLoadGallery}
        onClick={handleOpenModal}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <ImageModal
        closeModal={handleCloseModal}
        isModalOpen={isModalOpen}
        image={image}
      />
    </div>
  );
};

export default ImageCard;
