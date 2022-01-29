import Navbar from '../components/Navigation/Navbar';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


afterEach(cleanup);

it('Should render the navbar', () => {
    render(<Navbar />);
    const title = screen.getByTestId('Test');
    expect(title).toBeInTheDocument();
})