
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ToDo from '../components/ToDos/ToDo';


afterEach(cleanup);

it('Should render the ToDo List', () => {
    render(<ToDo ToDo={{ category: 'category', complete: true, id: 1, title: 'A title' }} />);
    const title = screen.getByTestId('ToDo');
    expect(title).toBeInTheDocument();
})
it('Should not render the ToDo List', () => {
    render(<ToDo ToDo={{ category: 'category', complete: true, title: 'A title' }} />);
    const title = screen.getByTestId('ToDo');
    expect(title).not.toBe();
})
