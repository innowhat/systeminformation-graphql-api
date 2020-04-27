import React from "react";

const Header = () => {
  return (
    <header>
      <div class="jumbotron">
        <div class="container">
          <h2 class="display-5">System Information GraphQL API</h2>
          <p class="lead">
            A light weight node/express service to access APIs of
            <a
              class="text-info"
              href="https://github.com/sebhildebrandt/systeminformation"
              target="_blank"
              alt=""
              rel="noopener noreferrer"
            >
              systeminformation
            </a>
            package via{" "}
            <a
              href="https://graphql.org/"
              target="_blank"
              alt=""
              rel="noopener noreferrer"
              class="text-info"
            >
              GraphQL.
            </a>
          </p>
          <p>
            API end point:
            <a href="http://localhost:5000/graphql" alt="" class="text-info">
              http://localhost:5000/graphql
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
