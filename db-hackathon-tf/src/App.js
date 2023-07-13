// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

function App() {

  const url = "https://storage.cloud.google.com/testtechnotf/ExportDataSet/Sample/test/16c33214ab76a6d5/Performance%20Guarantee%20-%20Wayne%20Enterprise%20Corporation%20.json";
  const [data, setData] = useState([]);
  
  const fetchInfo = () => { 
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');
    return fetch( {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: headers
      }, url)
            .then((res) => res.json()) 
            .then((d) => setData(d)) ;
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
      //fetchInfo();
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
<tr className="table-primary">
<td className="table-primary">Applicant</td>
<td className="table-primary">Testing Table structre</td>
</tr>
<tr className="table-primary">
<td className="table-primary">Beneficiary</td>
<td className="table-primary">Testing Table structre2</td>
</tr>
</tbody>
</table>

  </div>
    </div>
  );
}

export default App;
