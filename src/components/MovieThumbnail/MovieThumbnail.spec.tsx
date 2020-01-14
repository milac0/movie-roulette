import React from 'react';
import renderer from 'react-test-renderer';

import MovieThumbnail from './MovieThumbnail';

describe('MovieThumbnail renders correctly', () => {
    test('snapshot renders', () => {
        const movie = {
            popularity: 559.414,
            id: 419704,
            genres: [{
                id: 878,
                name: "Science Fiction"
            }],
            production_companies: [{
                id: 490,
                name: "New Regency Productions",
                origin_country: ""
            }],
            video: false,
            vote_count: 1843,
            vote_average: 6,
            title: "Ad Astra",
            release_date: "2019-09-17",
            original_language: "en",
            original_title: "Ad Astra",
            runtime: 123,
            genre_ids: [878, 18, 53, 12, 9648],
            backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
            adult: false,
            overview: "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond.",
            poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
        }

        const tree = renderer.create(<MovieThumbnail movie={movie} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

