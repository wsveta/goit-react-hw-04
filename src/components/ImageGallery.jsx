import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";
import { MutatingDots } from "react-loader-spinner";

const ImageGallery = ({ images,loader, setLoader, onOpen }) => {
  return (
    <>
      <ul className={css.gallery}>
        {images.map((image) => {
          return (
            <li className={css.imageWrapper} key={image.id}>
              <ImageCard onOpen={onOpen} setLoader={setLoader} image={image}/>
            </li>
          );
        })}
      </ul>
        {loader && (
          <MutatingDots
            className="spin"
            visible={true}
            height="100"
            width="100"
            color="#bebebe"
            secondaryColor="grey"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
    </>
  );
};

export default ImageGallery;
