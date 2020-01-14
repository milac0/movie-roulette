import React from 'react';
import renderer from 'react-test-renderer';

import FiltersBar from './FiltersBar';

describe('FiltersBar renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<FiltersBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

