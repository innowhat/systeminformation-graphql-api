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
            <div class="card-text">
              {JSON.stringify(data.DiskFileSystem.FsSize)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.DiskFileSystem.disksIO.__typename}</h5>
            <div class="card-text">
              {JSON.stringify(data.DiskFileSystem.disksIO)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.DiskFileSystem.fsStats.__typename}</h5>
            <div class="card-text">
              {JSON.stringify(data.DiskFileSystem.fsStats)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {data.DiskFileSystem.fsOpenFiles.__typename}
            </h5>
            <div class="card-text">
              {JSON.stringify(data.DiskFileSystem.fsOpenFiles)}
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {data.DiskFileSystem.blockDevices.__typename}
            </h5>
            <div class="card-text">
              {JSON.stringify(data.DiskFileSystem.blockDevices)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Disk;
