import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // console.log(searchQuery);
    // debouncing-related to api calls
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        getSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    // console.log("api calls:"+searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" grid grid-flow-col p-4 shadow-sm   top-0 left-0 w-full z-50">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          alt="menu-icon"
          className="h-8 my-1 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="/">
          <img
            alt="youtube-logo"
            className="h-14 mx-4 -mt-2"
            src="https://images.t3n.de/news/wp-content/uploads/2017/08/new-youtube-logo-2.jpg?class=hero-small"
          />
        </a>
      </div>
      <div className="my-1 col-span-10 ">
        <div
          onMouseEnter={() => setShowSuggestions(true)}
          onMouseLeave={() => setShowSuggestions(false)}
        >
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div
            className="fixed bg-white py-2 px-5 w-[32rem] z-40 rounded-lg shadow-md border border-gray-200"
            onMouseEnter={() => setShowSuggestions(true)}
            onMouseLeave={() => setShowSuggestions(false)}
          >
            <ul>
              {suggestions.map((s, index) => (
                <li className="hover:bg-gray-100 rounded-md" key={index}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex ">
        <img
          className="h-8 my-1 mx-3"
          alt="video-icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/ios-icon-library/video-video-1.png"
        />
        <img
          className="h-8 my-1 mx-3"
          alt="notification-icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/notification-bell.png"
        />
        <img
          className="h-10 mx-3"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7U_ef87Q7CQ1Fx_khkPq-y9IfPmBWrMZ6ig&s"
        />
      </div>
    </div>
  );
};

export default Head;
