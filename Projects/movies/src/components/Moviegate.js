import { useState } from "react";
import { Moviefetch} from "./Moviefetch"
import Error from "./Error";
import Movieinfo from "./Movieinfo";

function MoviesPortal() {
    const [searchInputText, setSearchInputText] = useState('')
    const [enteredSearchText, setEnteredSearchText] = useState('')
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    const onSearchTextEnter = (e) => {
        e.preventDefault();
        Moviefetch(searchInputText, setMovies, setError, () => setEnteredSearchText(searchInputText))
    };

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={onSearchTextEnter}>
                        <input
                            type="text" placeholder="Search Movie" className="form-control"
                            value={searchInputText}
                            onChange={(e) => setSearchInputText(e.target.value)}
                        />
                    </form>
                </div>
            </div>
            <br/>
            {error && <Error error={error} searchTerm={enteredSearchText}/>}
            {movies.length > 0 &&  <p className='text-light'>Showing {movies.length} Movies for '{enteredSearchText}'</p>}
            {movies.map((movie) => (
                <Movieinfo key={movie.imdbID} movie={movie} />
            ))}
        </>
    );
}

export default MoviesPortal;