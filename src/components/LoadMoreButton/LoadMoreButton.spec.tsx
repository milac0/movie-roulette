import React from 'react';
import renderer from 'react-test-renderer';

import LoadMoreButton from './LoadMoreButton';

describe('LoadMoreButton renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<LoadMoreButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

