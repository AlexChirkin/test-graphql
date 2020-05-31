import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/reset.css";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { GIT_TOKEN, GIT_API_URL} from "./config.js";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: GIT_API_URL,
  headers: {
    authorization: `Bearer ${GIT_TOKEN}`,
  },
});

const client = new ApolloClient({ cache, link });

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ,
  document.getElementById("root")
);