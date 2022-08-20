import { useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

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
            const url = `${REACT_APP_API_URL}/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;

            // https://api.the moviedb.org/3/search/movie?api_key=9e423027d44ac23fbe0304f005123b95&language=en-US&query=a&page=1&include_adult=false

            // /3/search/movie?api_key=9e423027d44ac23fbe0304f005123b95&language=en-US&query=a&page=1&include_adult=false

            const {
                data: { results }
            } = await axios.get(
                'https://api.themoviedb.org/3/search/movie?api_key=9e423027d44ac23fbe0304f005123b95&language=en-US&query=a&page=1&include_adult=false'
            );

            console.log(url);
            console.log(
                'https://api.themoviedb.org/3/search/movie?api_key=9e423027d44ac23fbe0304f005123b95&language=en-US&query=a&page=1&include_adult=false'
            );

            console.log(results);

            // fetch(
            //     'https://api.themoviedb.org/3/search/movie?api_key=9e423027d44ac23fbe0304f005123b95&language=en-US&query=a&page=1&include_adult=false'
            // )
            //     .then(response => response.json())
            //     .then(results => console.log(results));

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
