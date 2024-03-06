import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onOpen, setLoader }) => {
  return (
    <>
      <ul className={css.gallery}>
        {images.map((image) => {
          return (
            <li className={css.imageWrapper} key={image.id}>
              <ImageCard onOpen={onOpen} setLoader={setLoader} image={image} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
