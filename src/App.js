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
  useQueryLoader,
} from "react-relay/hooks";
import { fetchQuery } from "react-relay";
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
      tags: [{ name: "Content-Type", values: ["image/png", "image/jpeg"] }]
    ) {
      pageInfo {
        hasNextPage
      },
      edges {
        cursor
        node {
          id
          block {
            timestamp
          }
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
          <Txs preloadedQuery={txsPreloadedQuery} maxBlock={maxBlock} />
        </Suspense>
      ) : null}
    </>
  );
}

const Txs = (props) => {
  const initialData = usePreloadedQuery(
    transactionsQuery,
    props.preloadedQuery
  );
  const [dataGroup, setDataGroup] = useState([initialData]);
  const [loading, setLoading] = useState(false);

  const handleLoadNext = () => {
    const edges = dataGroup[dataGroup.length - 1].transactions.edges;
    fetchQuery(RelayEnvironment, transactionsQuery, {
        maxBlock: props.maxBlock,
        cursor: edges[edges.length - 1].cursor,
    }).subscribe({
      start: () => {
        setLoading(true);
      },
      complete: (...args) => {
        console.log("complete", args);
        setLoading(false);
      },
      next: (value) => {
        console.log("next", value);
        setDataGroup([...dataGroup, value])
      }
    });
  };

  return (
    <>
      {
        dataGroup.map((data, index) => (
          <ImageList key={index} variant="masonry" cols={2} gap={8} style={{ marginTop: "8px" }}>
            {data.transactions.edges.map((item) => (
              <TxImg key={item.node.id} data={item} />
            ))}
          </ImageList>
        ))
      }
      {
        dataGroup[dataGroup.length - 1].transactions.pageInfo.hasNextPage && (
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            { loading ? "Loading... " : <Button variant="contained" onClick={handleLoadNext}>Load more</Button> }
          </div>
        )
      }
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
    <ImageListItem style={{ display: "block", overflow: "hidden", minHeight: "60px" }}>
      <img src={src} alt="" width="100%" loading="lazy" />
      <ImageListItemBar
        title={props.data.node.id}
        subtitle={new Date(props.data.node.block.timestamp * 1000).toLocaleString()}
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
