import { useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

// "adult": false,
// "backdrop_path": "/3mTlazcIe9SDMnHEFO0OXZAjBcG.jpg",
// "genre_ids": [
//     18,
//     10749
// ],
// "id": 593337,
// "original_language": "bn",
// "original_title": "Tor Naam",
// "overview": "Tor Naam is a 2012 Bengali movie directed by Jaya Sankar and produced by Weird Industries. The film is a remake of the Telegu movie Kotha Bangaru Lokam.",
// "popularity": 1.344,
// "poster_path": "/yZoQKQYL4eAXGsZJsmyLpemLxAb.jpg",
// "release_date": "2012-12-07",
// "title": "Tor Naam",
// "video": false,
// "vote_average": 0,
// "vote_count": 0

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleChangeSearch = e => {
        setSearch(e.target.value);
    };

    const handleSearchMovies = async () => {
        setIsSearching(true);

        try {
            const url = `${REACT_APP_API_URL}/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&query=${search}`;

            const {
                data: { results }
            } = await axios.get(url);

            console.log(results);

            setMovies(results);
            setIsSearching(false);
        } catch (e) {
            console.error(e);
        }
    };

    return children({
        search,
        isSearching,
        movies,
        onChangeSearch: handleChangeSearch,
        onSearchMovies: handleSearchMovies
    });
};
