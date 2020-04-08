import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";
function App() {
  const [details, setDetails] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    active: 0,
    tests: 0
  });
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/all")
      .then(res => {
        setDetails({
          confirmed: res.data.cases,
          deaths: res.data.deaths,
          recovered: res.data.recovered,
          active: res.data.active,
          tests: res.data.tests
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      <div
        className="main d-flex justify-content-center align-items-center flex-column text-center"
        style={{ height: "100vh" }}
      >
        <h1 className="display-4 mb-5">Worldwide COVID-19 Stats</h1>
        <Link to="/confirmed" className="box mr-5">
          <h3 className="display-4 mb-5">View Full Stats</h3>
        </Link>

        <div className="boxes d-flex">
          <Link to="/confirmed" className="box mr-5">
            <h2>Confirmed</h2>
            <h2>{details.confirmed}</h2>
          </Link>
          <Link to="/" className="box mr-5">
            <h2>Deaths</h2>
            <h2>{details.deaths}</h2>
          </Link>
          <Link to="/" className="box  mr-5">
            <h2>Recovered</h2>
            <h2>{details.recovered}</h2>
          </Link>
          <Link to="/" className="box  mr-5">
            <h2>Total Tests</h2>
            <h2>{details.tests}</h2>
          </Link>
          <Link to="/" className="box">
            <h2>Active Case</h2>
            <h2>{details.active}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
