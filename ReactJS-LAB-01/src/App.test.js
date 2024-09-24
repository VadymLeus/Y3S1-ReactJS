import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('submits form with correct values', () => {
  render(<App />);
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  fireEvent.change(nameInput, { target: { value: 'John Don' } });
  fireEvent.change(emailInput, { target: { value: 'johndoN@example.com' } });
  fireEvent.click(submitButton);

});