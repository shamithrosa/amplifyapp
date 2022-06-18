import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function App() {
  const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        getData(response);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit btn clicked");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 id="header3">Sample Sheet - {new Date().toLocaleTimeString()}</h3>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">Click Me</Button>
        </Form>

        <hr></hr>
        <Table bordered="true">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </header>
    </div>
  );
}

export default App;
