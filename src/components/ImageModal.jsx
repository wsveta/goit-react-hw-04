import css from "./ImageModal.module.css";
import { IoLogoInstagram } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

const ImageModal = ({ closeModal, content }) => {
  return (
    
      <div className={css.modalContainer}>
        <img
          className={css.modalImage}
          src={content.urls.regular}
          alt="description"
        />
        <div className={css.modalInfoContainer}>
        <button className={css.modalBtn} onClick={closeModal}>
        <RxCross1 size={30} className={css.closeIcon}/>
          </button>
          <h1 className={css.modalTitle}>Photographer: {content.user.name}</h1>
          {content.user.instagram_username !== null && (
            <a
              href={`https://www.instagram.com/${content.user.instagram_username}`}
            >
              <IoLogoInstagram className={css.instagramIcon} size={30} />
            </a>
          )}
          {content.user.twitter_username !== null && (
            <a href={`https://www.twitter.com/${content.user.twitter_username}`}>
              <LuTwitter className={css.twitterIcon} size={30} />
              {content.user.location !== null && (
                <p className={css.modalLocation}>Location: {content.user.location}</p>
              )}
            </a>
          )}
          
        </div>
      </div>
  );
};

export default ImageModal;
