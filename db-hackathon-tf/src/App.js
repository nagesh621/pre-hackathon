// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import input from './input.json';
// import {getFiles} from './controller/listFiles';
// Imports the Google Cloud client library
// import {Storage} from '@google-cloud/storage';

// Creates a client
// const storage = new Storage();


function App() {

  const url = "https://storage.cloud.google.com/testtechnotf/ExportDataSet/Sample/test/16c33214ab76a6d5/Performance%20Guarantee%20-%20Wayne%20Enterprise%20Corporation%20.json?authuser=0";
  const [data, setData] = useState([]);
  
  const fetchInfo = () => { 
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','https://vijeshkunnummal-ideal-space-succotash-v6jj9vqv7wxhwpww-3000.preview.app.github.dev');
    // return fetch( url, {
    //   mode: 'no cors',
    //   credentials: 'include',
    //   method: 'POST',
    //   headers: headers
    //   })
    //         .then((res) => res.json()) 
    //         .then((d) => setData(d)) ;

    // return fetch(url, {
    //   method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   mode: "no-cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   // credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   // redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   // body: JSON.stringify(data), // body data type must match "Content-Type" header
    // }).then((res) => res.json()) 
    // .then((d) => setData(d)) ;
    setData(input);
;
    return input; 
    }
    
    // useEffect(() => {
    //   fetchInfo();
    // }, [])


  return (
    <div className="App">
      {/* <header className="App-header">
        Welcome to Hackathon
      </header> */}


  <div className="container-fluid">
<br/>
     <form >
  <div className="row mb-3">
    <label htmlFor="documentName" className="col-sm-2 col-form-label">Search Reference</label>
    <div className="col-sm-8">
      <input type="documentName" className="form-control" id="documentName"/>
    </div>
    <div className="col-sm-2">
      <button className="btn btn-primary" type="button" onClick={(e) => {
      e.preventDefault();
      alert("here");
      fetchInfo();
    }}>Button</button>
  </div>
  </div>
  </form>


<table className="table">
  <thead>
  <tr>
<th className="table-primary col-sm-2 ">Field Name</th>
<th className="table-primary col-sm-8">Extracted Data</th>
</tr>
</thead>
<tbody>
{this.data.entities.map((entities) => {
    <tr className="table-primary">  
      <td className="table-primary">{entities.type}</td>
      <td className="table-primary">{entities.textAnchor.content}</td>
    </tr>
 })}
</tbody>
</table>

  </div>
    </div>
  );
}

export default App;
