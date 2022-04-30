import React from 'react';

import { render, screen } from '@utils/test-utils';
import Login from '@components/login';


describe('Login component', () => {

    it('Login must render', () => {
        render(<Login />);
        expect(screen.getByText('Login with')).toBeInTheDocument();
    })

});
