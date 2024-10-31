import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [animeImages, setAnimeImages] = useState([]);
  const navigate = useNavigate();

  const goToAnimeList = () => {
    navigate('/list'); 
  };

  useEffect(() => {
    const fetchAnimeImages = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/anime'); 
        setAnimeImages(response.data.data.slice(1, 5)); 
      } catch (error) {
        console.error("Error fetching anime images:", error);
      }
    };

    fetchAnimeImages();
  }, []);

  return (
    <div className="container text-center">
      <h1>Welcome to Jikan Moe</h1>
      <p>Lets Found Some Anime in Jikan Moe AnimeWeb ^-^</p>

      <div className="row">
        {animeImages.map((anime) => (
          <div className="col-md-3" key={anime.mal_id}>
            <img 
              src={anime.images.jpg.image_url} 
              alt={anime.title} 
              style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '15px' }} 
            />
            <p>{anime.title}</p>
          </div>
        ))}
      </div>
      
      <button className="btn btn-dark mt-3" style={{ marginTop: '20px' }} onClick={goToAnimeList}>
        Go to Anime List
      </button>
    </div>
  );
}

export default Home;
