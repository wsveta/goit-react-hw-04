import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, setLoad }) => {

  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li className={css.imageWrapper} key={image.id}>
            <ImageCard setLoad={setLoad} image={image}/>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
