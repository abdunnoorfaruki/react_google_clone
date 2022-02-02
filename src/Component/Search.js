import SearchIcon from "@mui/icons-material/Search";
import Mic from "@mui/icons-material/Mic";
import { Button } from "@material-ui/core";
import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../utility/reducer";
export default function Search({ hideButton = false }) {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault()
    console.log("You click the search button" + inputVal);
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: inputVal,
    });
    navigate("/search", {
      state: {
        inputVal,
      },
    });
  };

  return (
    <form className="search">
      <div className="search__input">
        {!hideButton ? (
          <>
            <SearchIcon className="search__inputIcon" />
            <input type="text" onChange={(e) => setInputVal(e.target.value)} />
            <Mic />
          </>
        ) : (
          <>
            <input className="search__rightborder" type="text" onChange={(e) => setInputVal(e.target.value)} defaultValue={state.term}  />
            <Mic />
            <SearchIcon className="search__inputIcon" />
          </>
        )}
      </div>
      {!hideButton ? (
        <div className="search_buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Googel Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons_hidden">
          <Button type="submit" variant="outlined" onClick={search}>
            Googel Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}
