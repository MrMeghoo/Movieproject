import { useState } from "react";
import { Moviefetch } from "./Moviefetch";
import Error from "./Error";
import Movieinfo from "./Movieinfo";

const Moviegate = () => {
    const [searchText, setSearchText] = useState('');
    const [submittedText, setSubmittedText] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        Moviefetch(searchText, setMovieList, setFetchError, () => setSubmittedText(searchText));
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search Movie"
                            className="form-control"
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />
                    </form>
                </div>
            </div>
            <br />
            {fetchError && <Error error={fetchError} searchTerm={submittedText} />}
            {movieList.length > 0 && (
                <p className='text-light'>
                    Showing {movieList.length} Movies for '{submittedText}'
                </p>
            )}
            {movieList.map((movie) => (
                <Movieinfo key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default Moviegate;