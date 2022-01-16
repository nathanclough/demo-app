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


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom',()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}))

beforeEach(() => {
    jest.clearAllMocks();
  });


test('Navbar home link redirects to homepage', () => {
    const {getByText} = render(<Navbar></Navbar>)

    fireEvent.click(getByText(/home/i))
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/")
})

