import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure this points to your App.jsx file

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Root element not found');
}
