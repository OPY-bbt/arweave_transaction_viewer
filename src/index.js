import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import graphql from 'babel-plugin-relay/macro';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const currentBlockQuery = graphql`
  query srcCurrentBlockQuery {
    block {
      height
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, currentBlockQuery);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App preloadedQuery={preloadedQuery}/>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
