import React, { Fragment } from "react";

const Processes = ({ data }) => {
  console.log(data.Processes);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Processes.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">{data.Processes.process.__typename}</h5>
            <div class="card-text">
              {JSON.stringify(data.Processes.process)}
            </div>
          </div>

          <div class="card-body">
            <h5 class="card-title">{data.Processes.fullLoad.__typename}</h5>
            <div class="card-text">
              {JSON.stringify(data.Processes.fullLoad)}
            </div>
          </div>

          <div class="card-body">
            <h5 class="card-title">{data.Processes.currentLoad.__typename}</h5>
            <div class="card-text">
              {JSON.stringify(data.Processes.currentLoad)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Processes;
