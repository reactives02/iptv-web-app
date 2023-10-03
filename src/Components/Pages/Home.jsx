import React, { useState } from "react";
import "./home.css";
import countries from "./countries (1).json"
import Card from '../card/Card'
import Navbar from "../Navbar/Navbar";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredResults = countries.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="container">
      <Navbar handleSearchChange={handleSearchChange} searchQuery={searchQuery}/>
      <h1>Welcome To StreamX</h1>
      <h3>select country to move on</h3>
    
      <div className="card-cover">
        {
          searchQuery === null ?
          countries.map((item,idx)=>
            (

              <Card  index = {idx} data={item} type={"Home"} />
          )
          ):
          searchResults.map((item,idx)=>
            (

              <Card index = {idx} data={item} type={"Home"} />
          )
          )
      }

      </div>
    </div>
    
  );
};

export default Home;
