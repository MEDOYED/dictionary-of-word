import axios from "axios";
import { useEffect, useState } from "react";

import "./image-ai.scss";

const API_URL = "https://api.unsplash.com/search/photos";

const ImageAi = ({ data, word, elemOfArr }) => {
  const IMAGES_PER_PAGE = data[0].meanings.length;

  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}?query=${word}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    if (word) {
      getImages();
    }
  }, [word]);

  console.log(data[0].meanings.length);
  return (
    <>
      {images.length > elemOfArr && (
        <img
          className="image-ai__img"
          key={images[elemOfArr].id}
          src={images[elemOfArr].urls.small}
          alt={images[elemOfArr].alt_description}
        />
      )}
    </>
  );
};

export default ImageAi;
