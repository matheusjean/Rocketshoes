import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

import Header from './components/Header/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer pauseOnFocusLoss={false} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
