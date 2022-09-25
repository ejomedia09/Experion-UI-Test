import React from 'react';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import FilterWrapper from "../Filter/FilterWrapper";
import Sort from "../Sort/Sort";
import ProductWrapper from "../Products/ProductWrapper";
const Dashboard = () => {
  return <div className='grid-container'>  
      <Navbar />  
      <Header />
      <FilterWrapper />
      <Sort />
      <ProductWrapper />
  </div>;
}



export default Dashboard;