// ItemPreview.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemPreview from '../components/ItemPreview'; // Update the path as needed


test('renders ItemPreview component without crashing when URL is missing', () => {
  render(<ItemPreview />);
  // Add any additional checks as needed
});
