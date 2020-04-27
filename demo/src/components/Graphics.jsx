import React, { Fragment } from "react";

const Graphics = ({ data }) => {
  console.log(data.Graphics);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Graphics.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">List of displays</h5>

            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Graphics.displays)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">List of controllers</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Graphics.controllers)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Graphics;
