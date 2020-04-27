import React, { Fragment } from "react";

const Network = ({ data }) => {
  console.log(data.Network);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Network.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">{data.Network.networkStats.__typename}</h5>
            <div class="card-text">
              {JSON.stringify(data.Network.networkStats)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">List of Interface</h5>
            <div class="card-text">
              {JSON.stringify(data.Network.networkInterfaces)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {data.Network.networkConnections.__typename}
            </h5>
            <div class="card-text">
              {JSON.stringify(data.Network.networkConnections)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {data.Network.networkGatewayDefault.__typename}
            </h5>
            <div class="card-text">
              {JSON.stringify(data.Network.networkGatewayDefault)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {data.Network.networkInterfaceDefault.__typename}
            </h5>
            <div class="card-text">
              {JSON.stringify(data.Network.networkInterfaceDefault)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Network;
