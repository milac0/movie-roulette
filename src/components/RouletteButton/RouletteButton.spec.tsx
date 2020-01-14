import React from 'react';
import renderer from 'react-test-renderer';

import RouletteButton from './RouletteButton';

describe('RouletteButton renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<RouletteButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

