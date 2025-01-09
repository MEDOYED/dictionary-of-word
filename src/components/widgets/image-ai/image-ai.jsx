import axios from "axios";
import { useEffect, useState } from "react";

import "./image-ai.css";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 2;

const ImageAi = (props) => {
  const { word, elemOfArr } = props;
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

  return (
    <>
      {images.length > 0 && (
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
