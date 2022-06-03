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
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

import "./App.css";

const { Suspense } = React;

// Define a query
export const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($maxBlock: Int!) {
    transactions(
      first: 20,
      block: { min: 0, max: $maxBlock }
      tags: [{ name: "Content-Type", values: ["image/png"] }]
    ) {
      edges {
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
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  // const data = useLazyLoadQuery(graphql`
  //   query AppRepositoryNameQuery($first: Int) {
  //     blocks(first: $first) {
  //       edges {
  //         node {
  //           id
  //           previous
  //         }
  //       }
  //     }
  //   }
  // `, { first: first });

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
  );
}

const TxImg = (props) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    fetch('https://arweave.net/' + props.data.node.id)
      .then((response) => response.blob())
      .then(blob => {
        const imageUrl = window.URL.createObjectURL(blob);
        setSrc(imageUrl);
      })
    // arweave.transactions
    //   .getData(props.data.node.id, {
    //     decode: true,
    //     string: false,
    //   })
    //   .then((data) => {
    //     const blob = new Blob([data], { type: "image/png" });
    //     const imageUrl = window.URL.createObjectURL(blob);
    //     setSrc(imageUrl);
    //   })
    //   .catch((e) => {
    //     console.log("get data error", props.data.node.id);
    //     setSrc(false);
    //   });
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
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={props.preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
