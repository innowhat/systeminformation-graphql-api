import React, { Fragment } from "react";

const Cpu = ({ data }) => {
  return (
    <Fragment>
      <div class="col-sm-6 mb-3">
        <div class="card border-secondary h-100">
          <h5 class="card-header"> {data.Cpu.__typename} </h5>
          <div class="card-body">
            <h5 class="card-title">{data.Cpu.cpu.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Cpu.cpu)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.Cpu.flag.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Cpu.flag)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.Cpu.cache.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Cpu.cache)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.Cpu.temperature.__typename}</h5>

            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Cpu.temperature)}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.Cpu.currentspeed.__typename}</h5>
            <textarea
              class="form-control"
              rows="5"
              defaultValue={JSON.stringify(data.Cpu.currentspeed)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cpu;
