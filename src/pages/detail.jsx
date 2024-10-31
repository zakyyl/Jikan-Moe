import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/detail.css";

function Detail() {
    const { animeId } = useParams();
    const [animeDetail, setAnimeDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchAnimeDetail = async () => {
    try {
        const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${animeId}`
        );
        setAnimeDetail(response.data.data);
        setError(null);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    fetchAnimeDetail();
        }, [animeId]);

    if (loading) {
    return <div>Loading...</div>;
        }

    if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
        }

    return (
    <div className="container mt-5 detail-container">
    <h1 className="anime-title">{animeDetail.title}</h1>
    <img
        src={animeDetail.images.jpg.image_url}
        alt={animeDetail.title}
        className="anime-image"
    />
    <div className="anime-info">
        <p>
        <strong>Episodes:</strong> {animeDetail.episodes || "N/A"}
        </p>
        <p>
        <strong>Score:</strong> {animeDetail.score || "N/A"}
        </p>
        <p>
        <strong>Type:</strong> {animeDetail.type}
        </p>
        <p>
        <strong>Synopsis:</strong> {animeDetail.synopsis || "N/A"}
        </p>
        <p>
        <strong>Status:</strong> {animeDetail.status || "N/A"}
        </p>
        <p>
        <strong>Genres:</strong>{" "}
        {animeDetail.genres.map((genre) => genre.name).join(", ")}
        </p>
            </div>
        </div>
    );
}

export default Detail;
