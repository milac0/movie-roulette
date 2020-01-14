import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';

describe('Hover renders correctly', () => {
    test('snapshot renders', () => {
        const child = <div>testing div!</div>

        const tree = renderer.create(
            <Router>
                <Layout>
                    {child}
                </Layout>
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

