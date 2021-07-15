import { GraphQLClient, gql } from "graphql-request";
import useSWR from "swr";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";

const endpoint = process.env.REACT_APP_HASURA_GRAPHQL_ENDPOINT;

// FIXME: you should never pass secrets to your React App
// We won't do this in production >B(
const headers = {
  "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET || ""
};

const client = new GraphQLClient(endpoint, { headers });
const fetcher = query => client.request(query);

const getMovesTest = gql`
  query getMovesTest {
    moves(limit: 5) {
      id
      name
      framerate
      created_at
      duration_display
      start_timecode
    }
  }
`;

const Moves = () => {
  const { data, error } = useSWR(getMovesTest, fetcher);

  console.log({ data, error });

  if (!data) return <Alert variant="secondary">Loading...</Alert>;
  if (error) return <Alert variant="error">Error: {error.message}</Alert>;
  return (
    <ListGroup>
      {data.moves.map(m => (
        <ListGroup.Item key={m.id}>
          {m.id}::{m.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Moves;
