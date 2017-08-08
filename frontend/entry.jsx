import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStoe from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
