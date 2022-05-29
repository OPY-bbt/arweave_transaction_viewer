import fetchGraphQL from "./fetchGraphQL";

async function fetchBlocks(first = 10) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetchGraphQL(
    `
    query {
      blocks(first: ${first}) {
        edges {
          node {
            id
            previous  
          }
        }
      }
    }
    `
  );

  return response;
}

export default fetchBlocks;