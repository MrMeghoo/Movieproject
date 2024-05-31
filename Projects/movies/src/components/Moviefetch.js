// This function fetches a list of movies based on a query from the OMDB API
export const Moviefetch = async (query, setMovies, setError, onComplete) => {
    try {
        // Fetch movie data from the OMDB API using the provided query
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=e977b024`);
        const result = await response.json();
        
        
        if (result.Response === 'True') {
            const movieDetailsPromises = result.Search.map((movie) => getMovieDetails(movie.imdbID, setError));
            // this snippet is for all movie details promises to resolve
            const movieDetails = await Promise.all(movieDetailsPromises);

            // Update state with the fetched movie details
            setMovies(movieDetails);
            // Clear any previous error
            setError(null);
        } else {
            // If the response is not successful, set movies to an empty array
            setMovies([]);
            // Set an error message based on the error from the API
            setError(result.Error);
        }
    } catch (error) {
        // If an error occurs during the fetch operation, set movies to an empty array
        setMovies([]);
        // Set a generic error message
        setError('An error occurred while fetching data.');
    } finally {
        // Execute the onComplete callback function, regardless of success or failure
        onComplete();
    }
};

// This function fetches details of a single movie by its ID from the OMDB API
const getMovieDetails = async (id, setError) => {
    try {
        // Fetch movie details from the OMDB API using the provided ID
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=e977b024`);
        // Parse the response as JSON
        const result = await response.json();

        // Check if the response is successful
        if (result.Response === 'True') {
            return result;
        } else {
            throw new Error(result.Error);
        }
    } catch (error) {
        setError('An error occurred while fetching movie details.');
    }
};

// The OMDB API has a default behavior of returning only 10 results per request