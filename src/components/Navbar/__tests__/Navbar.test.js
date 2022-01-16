import React from 'react'
import {cleanup,fireEvent,render} from '@testing-library/react'
import Navbar from '../Navbar'

test('Navbar renders', () => {
    expect(() => render(<Navbar></Navbar>)).not.toThrowError()
})

test('Navbar has links for home and profile', () => {
    const {queryByText} = render(<Navbar></Navbar>)

    expect( queryByText(/Home/i)).toBeTruthy();
    expect( queryByText(/Profile/i)).toBeTruthy();
})