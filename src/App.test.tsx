import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders button and displays last clicked time', () => {
  render(<App />);

  // Check if the button is rendered using role and text content
  const buttonElement = screen.getByRole('button', { name: /Click/i });
  expect(buttonElement).toBeInTheDocument();

  // Click the button
  fireEvent.click(buttonElement);

  // Check if last clicked time is displayed
  const lastClickedText = screen.getByText(/Last clicked/i);
  expect(lastClickedText).toBeInTheDocument();
});
