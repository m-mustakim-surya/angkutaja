import React from "react";
import { ApolloProvider } from "@apollo/client";
import Routers from "./routers/Routers";
import client from "./config/apolloClient";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Routers />
      </ApolloProvider>
    </div>
  );
}

export default App;