import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/list.css";

function List() {
  const [datas, setDatas] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.jikan.moe/v4/anime');
        setDatas(response.data.data);
        setErrors(null);
      } catch (err) {
        setErrors(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (animeId) => {
    navigate(`/detail/${animeId}`);
  };

  return (
    <div className="container mt-5">
      <h1 className='text-center'>Anime List from Jikan API</h1>
      {loading && <p>Loading data...</p>}
      {errors && <p style={{ color: 'red' }}>Error: {errors}</p>}
      <Table className="table-large" dark striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Title</th>
      <th>Episodes</th>
      <th>Score</th>
      <th>Type</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {datas.map((anime, index) => (
      <tr key={anime.mal_id}>
        <th scope="row" className="text-center">{index + 1}</th>
        <td className="text-center">
  <img 
    src={anime.images.jpg.image_url} 
    alt={anime.title} 
    style={{ width: '140px', height: 'auto', borderRadius: '8px' }} 
  />
</td>
        <td>{anime.title}</td>
        <td className="text-center">{anime.episodes || 'N/A'}</td>
        <td className="text-center">{anime.score || 'N/A'}</td>
        <td className="text-center">{anime.type}</td>
        <td className="text-center">
          <Button color="light" onClick={() => handleDetailClick(anime.mal_id)}>
            Detail
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>


    </div>
  );
}

export default List;
