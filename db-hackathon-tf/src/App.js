// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import input from './input.json';
import CrayonSpectacles from './CrayonSpectacles.json';
import RedBricks from './RedBricks.json';
// import axios from 'axios';
// import {getFiles} from './controller/listFiles';
// Imports the Google Cloud client library
// import {Storage} from '@google-cloud/storage';

// Creates a client
// const storage = new Storage();


function App() {

  // const url = "https://us-central1-hack-team-technotf.cloudfunctions.net/getFileData";
  const url = "https://us-central1-hack-team-technotf.cloudfunctions.net/listFiles";
  // const url = "https://storage.cloud.google.com/nageshbucket/InputPDF_Train%20PDF_Advance%20Payment%20-%20JurrasicWorld-0.json?authuser=0";
  const [data, setData] = useState(RedBricks);
  
  async function getFileData() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','https://vijeshkunnummal-ideal-space-succotash-v6jj9vqv7wxhwpww-3000.preview.app.github.dev');
    
  // await axios.get(url,headers)
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });

    // let response = await fetch(url,{
    //   method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   mode: "no-cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   // credentials: "same-origin", // include, *same-origin, omit
    //   headers,
    //  // redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   // body: JSON.stringify(data), // body data type must match "Content-Type" header
    // })
    // .then((response) => {
    //     // await delay(10000);
    //     const data = JSON.stringify(response.json);
    //     console.log("response" + response.data);
    //     // alert(response.data)
    //     // this.setState({message:data})
    //     // return response.data;
    // })
    // const data = await response.json();
    // console.log(data);
    setData(input);

    return input; 
    // return data;
  }

  const fetchInfo = () => { 
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin',window.location.origin);
    // return fetch( url, {
    //   mode: 'no cors',
    //   credentials: 'include',
    //   method: 'POST',
    //   headers: headers
    //   })
    //         .then((res) => res.json()) 
    //         .then((d) => setData(d)) ;

    //return
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((res) => {
      console.log(res.json())
    });
    // .then((d) => console.log(d)) ;
    setData(CrayonSpectacles);

    return CrayonSpectacles; 
    }
    
    // useEffect(() => {
    //   fetchInfo();
    // }, [])

    let mandatoryList = ['beneficiary','applicant','underlying-business','guarantee-amount','duration-or-termination'];
    let clauseList = ['guarantee-claim-demand-terms','expiry-event','clause-foreign-governing-law','clause-transfer'];
    let highRisk = 'Russia';

    const getRisk = (entity) => {
      let risk = 'LOW';
      if(entity.textAnchor.content.includes(highRisk)) {
        risk = 'HIGH';
      }
      return risk;
    }

    const getClassRisk = (entity) => {
      let classType = "table-default";
      if(entity.textAnchor.content.includes(highRisk)) {
        classType = "table-danger";
      }
      return classType;
    }

    const getClass = (entity) => {
      let classType = "table-default";
      if(entity.textAnchor.content === null || entity.textAnchor.content === ''){
        classType = "table-danger";
      }
      return classType;
    }

  return (
    <div className="App">
      {/* <header className="App-header">
        Welcome to Hackathon
      </header> */}


  <div className="container-fluid">
<br/>
     <form >
  <div className="row mb-3">
    <label htmlFor="documentName" className="col-sm-2 col-form-label bold">Search Reference</label>
    <div className="col-sm-8">
      <input type="documentName" className="form-control" id="documentName"/>
    </div>
    <div className="col-sm-2">
      <button className="btn btn-primary" type="button" onClick={(e) => {
      e.preventDefault();
      // fetchInfo();
      getFileData();
    }}>Search</button>
  </div>
  </div>
  </form>
<div className="row mb-3">
{/* <div className="col sm-6"> */}
<h1>Extracted Entities Summary</h1>
<table className="table">
  <thead>
  <tr>
<th className="table-primary col-sm-2 ">Field Name</th>
<th className="table-primary col-sm-8">Extracted Data</th>
</tr>
</thead>
<tbody>
{data.entities.map((entity) => {
   if(mandatoryList.includes(entity.type)) {
    let classType = getClass(entity);
      return <tr className={classType}> 
      <td className={classType}>{entity.type}</td>
      <td className={classType}>{entity.textAnchor.content}</td>
      </tr>
   }
 })}
</tbody>
</table>


<h1>Clauses Summary</h1>
<table className="table">
  <thead>
  <tr>
  <th className="table-primary col-sm-2">Clause Type</th>
  <th className="table-primary col-sm-7">Clause Data</th>
  <th className="table-primary col-sm-2">Risk Type</th>
</tr>
</thead>
<tbody>
{data.entities.map((entity) => {
   if(clauseList.includes(entity.type)) {
    let classType = getClassRisk(entity);
      return <tr className={classType}> 
      <td className={classType}>{entity.type}</td>
      <td className={classType}>{entity.textAnchor.content}</td>
      <td className={classType}>{getRisk(entity)}</td>
      </tr>
   }
 })}
</tbody>
</table>


  {/* </div>
  <div className='col sm-6'> &nbsp;
    </div> */}
    </div>
    
    </div>
    
    </div>
  );
}

export default App;
