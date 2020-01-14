import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './MovieDetails';

jest.mock('react-router', () => ({
    useParams: jest.fn().mockReturnValue({ movieid: '419704' }),
}));

describe('MovieDetails renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<MovieDetails />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

