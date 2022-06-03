import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { currentBlockQuery } from "./index";

import "./App.css";

const { Suspense } = React;

// Define a query
export const transactionsQuery = graphql`
  query AppTransactionsQuery($maxBlock: Int!, $cursor: String) {
    transactions(
      first: 20,
      after: $cursor,
      block: { min: 0, max: $maxBlock }
      tags: [{ name: "Content-Type", values: ["image/png"] }]
    ) {
      edges {
        cursor
        node {
          id
          tags {
            name
            value
          }
          data {
            type
            size
          }
        }
      }
    }
  }
`;

function App(props) {
  const currentBlockInfo = usePreloadedQuery(
    currentBlockQuery,
    props.preloadedQuery
  );
  const {
    block: { height: maxBlock },
  } = currentBlockInfo;
  const [txsPreloadedQuery, setTxsPreloadedQuery] = useState(null);

  // TODO: loadQuery in useEffect
  useEffect(() => {
    const preloadedQuery = loadQuery(RelayEnvironment, transactionsQuery, {
      maxBlock,
      // cursor: "WyIyMDIyLTA2LTAzVDA0OjU3OjUzLjEzMVoiLDIwXQ",
    });
    setTxsPreloadedQuery(preloadedQuery);
  }, [maxBlock]);

  return (
    <>
      <p>Total Block Height: {maxBlock}</p>
      {txsPreloadedQuery ? (
        <Suspense fallback={<p>Loading Transactions...</p>}>
          <Txs preloadedQuery={txsPreloadedQuery} />
        </Suspense>
      ) : null}
    </>
  );
}

const Txs = (props) => {
  const data = usePreloadedQuery(
    transactionsQuery,
    props.preloadedQuery
  );

  return (
    <>
      <ImageList variant="masonry" cols={3} gap={8} style={{ marginTop: "8px" }}>
        {data.transactions.edges.map((item) => (
          <TxImg key={item.node.id} data={item} />
        ))}
      </ImageList>
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <Button variant="contained">Load more</Button>
      </div>
    </>
  )
};

const TxImg = (props) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    fetch('https://arweave.net/' + props.data.node.id)
      .then((response) => response.blob())
      .then(blob => {
        const imageUrl = window.URL.createObjectURL(blob);
        setSrc(imageUrl);
      });
  }, [props.data.node.id]);

  return (
    <ImageListItem>
      <img src={src} alt="" width="100%" loading="lazy" />
      <ImageListItemBar
        title={props.data.node.id}
        // subtitle={item.author}
      />
    </ImageListItem>
  );
};

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading Current Block..."}>
        <App preloadedQuery={props.preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
