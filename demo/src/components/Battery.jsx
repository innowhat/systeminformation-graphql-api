import React, { Fragment } from "react";

const Battery = ({ data }) => {
  console.log(data.Battery);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Battery.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">{data.Battery.battery.__typename}</h5>
            <div class="card-text">{JSON.stringify(data.Battery.battery)}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Battery;
