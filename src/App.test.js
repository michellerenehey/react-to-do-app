import { render, screen } from '@testing-library/react';
import App from './App';

test('renders has a to do list header', () => {
  render(<App />);
  const element = screen.getByText('To Do List');
  expect(element).toBeInTheDocument();
});
