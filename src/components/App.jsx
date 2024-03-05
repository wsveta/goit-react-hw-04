import "./App.css";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { fetchImages } from "../images-api";
import LoadMoreBtn from "./LoadMoreBtn";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import toast from "react-hot-toast";
import ImageModal from "./ImageModal";
import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
  const [totalImages, setTotalImages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); //стан повідомлення про завантаження нових зображень
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false); // стан анімації завантаження
  const [modalContent, setModalContent] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setModalContent({});
    setPage(1);
    setImages([]);
    setTotalImages(0);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setLoader(true);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        if (data.results.length === 0) {
          toast("No images were found", {
            duration: 1500,
          });
          return;
        }
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
        setTotalImages(data.total);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchQuery]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} value={searchQuery} />
      <ImageGallery
        onOpen={handleOpenModal}
        images={images}
        loader={loader}
        setLoader={setLoader}
      />
      {!isLoading && images.length > 0 && images.length < totalImages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <Modal
        isOpen={isModalOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <ImageModal
          closeModal={handleCloseModal}
          isModalOpen={isModalOpen}
          content={modalContent}
        />
      </Modal>
    </div>
  );
}

export default App;
