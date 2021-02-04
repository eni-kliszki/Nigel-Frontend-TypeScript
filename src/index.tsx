import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

