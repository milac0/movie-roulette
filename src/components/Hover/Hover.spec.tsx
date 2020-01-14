import React from 'react';
import renderer from 'react-test-renderer';

import Hover from './Hover';

describe('Hover renders correctly', () => {
    test('snapshot renders', () => {
        const hover = <div>testing div!</div>
        const child = <div>another testing div!</div>

        const tree = renderer.create(
            <Hover onHover={hover}>
                {child}
            </Hover>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

