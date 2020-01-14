import React from 'react';
import renderer from 'react-test-renderer';

import MovieList from './MovieList';

describe('MovieList renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<MovieList />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});

