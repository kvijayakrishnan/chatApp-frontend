import React from 'react'
import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <>
      <div
        className="card my-3 mb-5 m-md-5 p-5 shadow  border-dark"
        id="homePage"
      >
        <div className="p-5 col">
          <div className="lead display-1">Welcome To the Chat-App</div>
        </div>
        <div className="p-5 display-6 text-danger col">
          <p>Communication never fail through te internet</p>
        </div>
      </div>
      <div className="container-fluid bg-dark p-5">
        <div className="container p-5 d-flex justify-content-center align-items-center">
          <Link
            to={"/register"}
            className="btn btn-outline-warning col-6 p-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}

export default DashBoard