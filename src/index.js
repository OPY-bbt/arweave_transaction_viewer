import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import App, { RepositoryNameQuery } from './App';
import reportWebVitals from './reportWebVitals';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch('https://arweave.net/info')
  .then(response => response.json())
  .then(data => {
    const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, { maxBlock: data.height });

    root.render(
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <App arweaveInfo={data} preloadedQuery={preloadedQuery}/>
        </StyledEngineProvider>
      </React.StrictMode>
    );
  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
