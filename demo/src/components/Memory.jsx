import React, { Fragment } from "react";

const Memory = ({ data }) => {
  console.log(data.Memory);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Memory.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">{data.Memory.memory.__typename}</h5>
            <div class="card-text">{JSON.stringify(data.Memory.memory)}</div>
          </div>

          <div class="card-body">
            <h5 class="card-title">Layout list</h5>
            <div class="card-text">{JSON.stringify(data.Memory.layouts)}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Memory;
