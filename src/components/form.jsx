import React, { useState } from "react";
import "./form.css";
import "../index.css"

const Form = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [arrObj, setArrObj] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    arrObj.push({
      name: name,
      dept: department,
      rate: rating,
    });

    setArrObj(arrObj);

    setName("");
    setDepartment("");
    setRating("");
  };

  return (
    <>
      <div className="div">
        <h2>EMPLOYEE FEEDBACK FORM</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <br />

          <label htmlFor="department">Department: </label>
          <input
            type="text"
            name="department"
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            required
          />
          <br />

          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="div">
          <div className="dispaly-container">
          {arrObj.map((data, index) => {
              return(
                  <div key={index} className="display">
                      Name : {data.name} | Department : {data.dept} | Rating : {data.rate}
                  </div>
              )
          })}
          </div>
      </div>
    </>
  );
};

export default Form;
