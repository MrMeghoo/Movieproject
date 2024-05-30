export const Moviefetch = async (searchText, moviesCallback, errorCallback, finallyCallback) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchText}&type=movie&apikey=e977b024`);
        const data = await response.json();

        if (data.Response === 'True') {
            const movieInfoPromises = data.Search.map((movie) => fetchMovieInfo(movie.imdbID, errorCallback));
            const Movieinfo = await Promise.all(movieInfoPromises);

            moviesCallback(Movieinfo);
            errorCallback(null);
        } else {
            moviesCallback([]);
            errorCallback(data.Error);
        }
    } catch (err) {
        moviesCallback([]);
        errorCallback('An error occurred while fetching data.');
    } finally {
        finallyCallback()
    }
};

const fetchMovieInfo = async (id, errorCallback) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=e977b024`);
        const data = await response.json();

        if (data.Response === 'True') {
            return data;
        } else {
            throw new Error(data.Error);
        }
    } catch (err) {
        errorCallback('An error occurred while fetching movie details.');
    }
};

