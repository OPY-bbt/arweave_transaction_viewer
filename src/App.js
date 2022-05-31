import React from 'react';

import logo from './logo.svg';
import './App.css';

// import fetchBlocks from "./apis/fetchBlocks";

import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    blocks {
      edges {
        node {
          id
          previous  
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
  first: 20,
});

function App(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  console.log("data", data);

  // React.useEffect(() => {
  //   let isMounted = true;
  //   fetchBlocks().then(response => {
  //     if (!isMounted) {
  //       return;
  //     }

  //     console.log(response);
  //   });

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
