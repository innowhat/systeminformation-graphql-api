import React, { Fragment } from "react";

const Hardware = ({ data }) => {
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Hardware.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">{data.Hardware.system.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Hardware.system)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.Hardware.bios.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Hardware.bios)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.Hardware.chassis.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Hardware.chassis)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.Hardware.baseboard.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Hardware.baseboard)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hardware;
