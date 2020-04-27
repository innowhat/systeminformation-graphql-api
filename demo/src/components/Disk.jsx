import React, { Fragment } from "react";

const Disk = ({ data }) => {
  console.log(data.DiskFileSystem);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.DiskFileSystem.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">fsSize list</h5>

            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.DiskFileSystem.FsSize)}
            />
          </div>

          <div class="card-body">
            <h5 class="card-title">
              List of open files
            </h5>

            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.DiskFileSystem.fsOpenFiles)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">
              List of block devices
            </h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.DiskFileSystem.blockDevices)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Disk;
