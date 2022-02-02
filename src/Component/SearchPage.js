import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { useGoogleSEarch } from '../hooks/useGoogleSearch';
import Search from "./Search";
import "./SearchPage.css";

// Icons
import { Avatar } from "@material-ui/core";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MapIcon from "@mui/icons-material/Room";
import MoreIcon from "@mui/icons-material/More";
import AppIcon from "@mui/icons-material/Apps";

const Searchpage = () => {
  const [{ term = "tesla" }, dispatch] = useStateValue();
  // LIVE CALL API
  const {data} = useGoogleSEarch(term)
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="searchPage__headerBody">
          <div className={`searchPage_headerRight f_sb`}>
            <Link to="/">
              <img
                className="searchPage__logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google "
              />
            </Link>
            <div className="searchPage__headerBody">
              <Search hideButton />
            </div>
          </div>

          <div className={`searchPage_headerLeft f_sb`}>
            <SettingsIcon />
            <AppIcon />
            <Avatar />
          </div>
        </div>

        <div className="searchPage__options">
          <div className="searchPage__optionsRight">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="#">All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="#">News</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="#">Images</Link>
            </div>
            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="#">Shopping</Link>
            </div>
            <div className="searchPage__option">
              <MapIcon />
              <Link to="#">Maps</Link>
            </div>
            <div className="searchPage__option">
              <MoreIcon />
              <Link to="#">More</Link>
            </div>
          </div>
          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <Link to="#">Tools</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__results">
        <p className="searchPage__resultCount">
          About{" "}
          {data?.items.length > 0 &&
            data.searchInformation.formattedTotalResults}{" "}
          results (
          {data?.items.length > 0 && data.searchInformation.formattedSearchTime}
          )
        </p>

        <h3 className="searchPage__searchTerm">
          Showing Results for{" "}
          <span>
            {" "}
            <Link to="/search">{term}</Link>{" "}
          </span>
        </h3>

        <div className="searchPage__result">
          {data?.items.map((result, index) => (
            <>
              <div className="searchPage__resultItem">
                <div className="searchPage__resultImg">
                 
                    {result.pagemap?.cse_image?.length > 0 && (
                      <a href={result.pagemap.cse_image[0].src}> <img src={result.pagemap?.cse_image[0]?.src} alt='.' /></a>
                     
                    ) }
                  
                </div>
                <p key={index} className="searchPage__dLink">
                  <a href={result.link}>{result.link}</a>
                </p>
                <h2 className="searchPage__title">
                  {" "}
                  <a href={result.link}>{result.title}</a>{" "}
                </h2>
                <p className="searchPage__description">{result.snippet} </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
