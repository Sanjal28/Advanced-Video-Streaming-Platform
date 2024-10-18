import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const categories = [
    "All",
    "Cricket",
    "Cooking",
    "Music",
    "Gaming",
    "News",
    "Live",
    "Fashion",
    "Education",
    "Sports",
    "Travel",
    "Comedy",
    "Technology",
    "History",
  ];

  return (
    <div className="flex">
      <Button name={categories} />
    </div>
  );
};

export default ButtonList;
