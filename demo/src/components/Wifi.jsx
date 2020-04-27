import React, { Fragment } from "react";

const Wifi = ({ data }) => {
  console.log(data.Wifi);
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Wifi.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">list of wifi networks</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Wifi.wifiNetworks)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wifi;
