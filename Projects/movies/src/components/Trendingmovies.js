import React, { useState, useEffect } from 'react';

function TrendingMovies() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => {
                setTrendingMovies(data.results.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Trending Movies</h2>
            {loading && <div>Loading...</div>}
            {error && <div>Error fetching trending movies: {error.message}</div>}
            <ul>
                {trendingMovies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TrendingMovies;
