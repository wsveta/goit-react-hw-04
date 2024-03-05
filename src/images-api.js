import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] =
  "Client-ID eF4H8D0hAETovdzEXWtIXcDsq1SirZq2VXCqpJdSwNc";

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 20,
      page,
    },
  });
  console.log(response)
  return response.data;
};