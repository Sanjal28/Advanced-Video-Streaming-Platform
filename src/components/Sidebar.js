import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
// early return   
  if (!isMenuOpen) return null;
  return (
    <div className=" shadow-lg w-48 p-4 h-screen">
      <ul className="font-bold">
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Movies</li>
      </ul>
      <ul className="pt-4">
        <li>Your channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Downloads</li>
      </ul>
      <h1 className="font-bold pt-4">Subscription</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
