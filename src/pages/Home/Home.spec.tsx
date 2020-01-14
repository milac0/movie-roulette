import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

describe('Home renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

