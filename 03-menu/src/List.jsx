import React from "react";

const List = ({ items }) => {
  return (
    <div className="center">
      {items.map((listItems) => {
        const { id, title, image, info, price } = listItems;
        return (
          <article className="menuItem">
            <img className="photo" src={image} alt={title} />
            <div className="itemInfo">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="itemText">{info}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
