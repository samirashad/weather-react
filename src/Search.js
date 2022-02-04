import React from "react";
import "./styles.css";

export default function Seacrh() {
  return (
    <form id="searchCity">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter City"
            className="form-control"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            className="btn btn-success w-100"
            value="search"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-success" id="currentLocation">
            Current location
          </button>
        </div>
      </div>
    </form>
  );
}
