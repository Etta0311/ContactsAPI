import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Contacts.css";

const Contacts = () => {
  //set a new state variable
  const [results, setResults] = useState([]);

  //API link
  const API = `https://jsonplaceholder.typicode.com/users`;

  //GET method for result and set state
  const searchAPI = () => {
    axios.get(API).then((response) => {
      setResults(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="factsCon">
      <h1 className="display-3 text-center pb-2">Contact List</h1>
      <div className="d-grid col-5 mx-auto my-4">
        <button className="btn button" onClick={searchAPI}>
          Show my Contacts
        </button>
      </div>
      <div className="row">
        {results
          ? results.map((result) => (
              <div className="card text-center" key={result.id}>
                <h2>{result.name}</h2>

                <div className="card-body">
                  <ul className="cards">
                    <li className="list-group-item">
                      Username : {result.username}
                    </li>
                    <li className="list-group-item">Email: {result.email}</li>
                    <li className="list-group-item">Phone: {result.phone}</li>
                    <li className="list-group-item">
                      Address : <br></br>
                      {result.address.street}
                      <br></br>
                      {result.address.suite}
                      <br></br>
                      {result.address.city}
                      <br></br>
                      Zipcode: {result.address.zipcode}
                      <br></br>
                    </li>
                    <li className="list-group-item">
                      Company : <br></br>
                      {result.company.name}
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  Website: <br></br>
                  <a href="{result.website}">{result.website}</a>
                </div>
              </div>
            ))
          : "No Contact Saved"}
      </div>
    </div>
  );
};

export default Contacts;
