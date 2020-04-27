import React, { Fragment } from "react";

const Os = ({ data }) => {
  console.log(data.OS);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.OS.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">{data.OS.info.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.OS.info)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">List of users</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.OS.users)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">OS UUID</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.OS.uuid)}
            />
          </div>

          <div class="card-body">
            <h5 class="card-title">{data.OS.versions.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.OS.versions)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Os;
