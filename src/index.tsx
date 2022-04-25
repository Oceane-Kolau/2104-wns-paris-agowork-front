import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import App from "./App";

let url: string | undefined = "";

if (process.env.NODE_ENV !== "production") {
  if (process.env.REACT_APP_LOCALHOST) {
    url = "http://localhost:4000";
  } else {
    url = "http://localhost:4001";
  }
} else {
  url = "/graphql";
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
  }
  if (networkError) {
    console.log("networkError", networkError);
  }
});

const httpLink = createHttpLink({
  uri: url,
});

const authLink = setContext((_, { headers }) => {
  const jwt = localStorage.getItem("jwt");
  return {
    headers: {
      ...headers,
      authorization: jwt,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, authLink.concat(httpLink)]),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
