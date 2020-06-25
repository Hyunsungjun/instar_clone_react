import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import Feed from './pages/Feed.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Routes />
      <Routes />

    </BrowserRouter>
  );
}
export default App;
