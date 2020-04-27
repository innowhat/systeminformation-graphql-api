import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

import SystemInformation from "./components/SystemInformation";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <SystemInformation />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
