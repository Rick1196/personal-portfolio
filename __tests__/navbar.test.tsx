import Ract from 'react';
import { render, screen } from '@utils/test-utils';
import Navbar from '@components/navbar/navbar';

describe('Navbar', () => {
    it('should render navabr', () => {
        render(<Navbar />);
        expect(screen.getAllByText('My personal porfolio')).toHaveLength(2);
    });
    it('should render navbar with two', () => {
        render(<Navbar />);
        const menuOptions = screen.getAllByRole('button');
        expect(menuOptions).toHaveLength(3);
    })
});
