// TOMORROW: Code walkthru 
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 
// Where to write test cases? 
// How to Write test cases?
// How to test our app using tools against the test cases?