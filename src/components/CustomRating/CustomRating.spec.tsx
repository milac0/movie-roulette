import React from 'react';
import renderer from 'react-test-renderer';

import CustomRating from './CustomRating';

describe('CustomRating renders correctly', () => {
    test('snapshot renders', () => {
        const props = {
            movieid: 419704
        }
        const tree = renderer.create(<CustomRating {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});