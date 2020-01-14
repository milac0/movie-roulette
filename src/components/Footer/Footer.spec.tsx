import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<Footer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

