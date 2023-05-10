import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-unresolved
import App from './src/App.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));
// eslint-disable-next-line react/jsx-filename-extension
root.render(
	// eslint-disable-next-line react/jsx-filename-extension
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
