import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div style={{ height: "40vh" }} />

      <div class="container text-center">
        <p>
          <a
            href="https://github.com/innowhat/systeminformation-graphql-api"
            class="btn btn-secondary btn-sm"
          >
            <img
              src="https://images.ctfassets.net/dnrnjrgdcqxo/1PJ37TouYuzOkD5QhrKmqT/90157b288e647a465bf74940eeb48aa0/github.svg"
              width="30"
              alt="source code"
            />
          </a>
        </p>
        <p class="text-center">
          copyright 2020 @{" "}
          <a href="https://www.innowhat.com/" target="_blank">
            innowhat.com
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
