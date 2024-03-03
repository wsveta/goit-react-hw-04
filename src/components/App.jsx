import "./App.css";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { fetchImages } from "../images-api";
import LoadMoreBtn from "./LoadMoreBtn";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import toast from "react-hot-toast";

function App() {
  const [totalImages, setTotalImages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalImages(0);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setLoad(true);
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
      <ImageGallery images={images} load={load} setLoad={setLoad} />
      {!isLoading && images.length > 0 && images.length < totalImages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}

export default App;
