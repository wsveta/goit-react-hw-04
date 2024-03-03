import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { IoLogoInstagram } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

ReactModal.setAppElement("body");

const ImageModal = ({ closeModal, isModalOpen, image }) => {

  return (
    <ReactModal
      isOpen={isModalOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.modalContainer}>
        <img
          className={css.modalImage}
          src={image.urls.regular}
          alt="description"
        />
        <div className={css.modalInfoContainer}>
        <button className={css.modalBtn} onClick={closeModal}>
        <RxCross1 size={30} className={css.closeIcon}/>
          </button>
          <h1 className={css.modalTitle}>Photographer: {image.user.name}</h1>
          {image.user.instagram_username !== null && (
            <a
              href={`https://www.instagram.com/${image.user.instagram_username}`}
            >
              <IoLogoInstagram className={css.instagramIcon} size={30} />
            </a>
          )}
          {image.user.twitter_username !== null && (
            <a href={`https://www.titter.com/${image.user.twitter_username}`}>
              <LuTwitter className={css.twitterIcon} size={30} />
              {image.user.location !== null && (
                <p className={css.modalLocation}>Location: {image.user.location}</p>
              )}
            </a>
          )}
          
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
