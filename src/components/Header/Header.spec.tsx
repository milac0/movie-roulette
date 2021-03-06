import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header renders correctly', () => {
    test('snapshot renders', () => {
        const tree = renderer.create(<Router><Header /></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

