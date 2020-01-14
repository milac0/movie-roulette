import React from 'react';
import renderer from 'react-test-renderer';

import ModalContent from './ModalContent';

describe('ModalContent renders correctly', () => {
    test('snapshot renders', () => {
        const handleClose = jest.fn();

        const tree = renderer.create(<ModalContent handleClose={handleClose} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

