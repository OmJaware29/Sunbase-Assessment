import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar(setCity,setSearchKey,setSelectedOption) {
  const [isListOpen, setListOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchKey , setSearchKey  ] = useState("")
  const [city, setCity] = useState("");


  const token = localStorage.getItem("jwtToken");
  console.log("home directory--->>>", token);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setListOpen(false);
  };
  
  // const handleCityChange = (e) => {
  //   setCity(e.target.value);
  // };

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="btn btn-dark me-2" to="/addcustomer">
            Add Customer
          </Link>

          <div className="d-flex align-items-center">
            <div className="dropdown" onClick={toggleList}>
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedOption}
              </button>
              <ul
                className={`dropdown-menu ${isListOpen ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton"
              >
                <li
                  className="dropdown-item"
                  onClick={() => handleOptionClick("first_name")}
                >
                  first_name
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => handleOptionClick("city")}
                >
                  city
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => handleOptionClick("email")}
                >
                  email
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => handleOptionClick("phone")}
                >
                  phone
                </li>
              </ul>
            </div>
            {selectedOption === "city" ? (
              <input
                type="text"
                className="form-control ms-3"
                placeholder="Enter city"
                value={searchKey}
                onChange={handleSearchParam}
              />
            ) : (
              <input
                type="text"
                className="form-control ms-3"
                placeholder={`Search by ${searchKey}`}
              />
            )}
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-light mx-2 sync-btn">Sync</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
