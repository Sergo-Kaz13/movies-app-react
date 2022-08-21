import PT from 'prop-types';

import { Link } from '../../components';
import { StyledWrapper, StyledCard } from './styles';

const { REACT_APP_STORAGE_URL } = process.env;

export const HomePage = ({ movies }) => (
    <StyledWrapper>
        {movies.map(({ id, original_title, poster_path }) => {
            const imageUrl = REACT_APP_STORAGE_URL + poster_path;

            return (
                <StyledCard key={id} $imageUrl={imageUrl}>
                    <Link href="/">{original_title}</Link>
                </StyledCard>
            );
        })}
    </StyledWrapper>
);

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

HomePage.propTypes = {
    /**
     * A list of movies fetched from the BE
     */
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string
        })
    ).isRequired
};
