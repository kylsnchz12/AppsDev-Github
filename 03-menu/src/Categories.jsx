import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btnContainer">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filterBtn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
