import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Page } from './components/Page';

const container = document.getElementById('root');

// Create a root

const root = ReactDOMClient.createRoot(container);

// Initial render:

root.render(<Page />);
