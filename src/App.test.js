import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByTestId } = render(<App />);
  const linkElement = getAllByTestId('myapp');
  expect(linkElement).toBeTruthy();
});
