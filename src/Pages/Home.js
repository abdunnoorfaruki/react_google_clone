import { Avatar } from '@material-ui/core';
import AppIcon from '@mui/icons-material/Apps';
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from '../Component/Search' ; 

const Home = () => {
  console.log(process.env.REACT_APP_CUSTOME_SEARCH_API_KEY)
  return (
    <div className="home">
      <div className="home__header">

        <div className="home__headerleft">
          <Link to="about">About</Link>
          <Link to="about">Store</Link>
        </div>
        
        <div className="home__headerright">
          <Link to="about">Gmail</Link>
          <Link to="about">Galary</Link>
          <AppIcon/>
          <Avatar/>
        </div>
      </div>
      <div className="home__body">
        <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google ' />

        <Search  />
      </div>
    </div>
  );
};

export default Home;
