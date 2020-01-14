import React from 'react';
import renderer from 'react-test-renderer';

import GuestButton from './GuestButton';

describe('GuestButton renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<GuestButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});