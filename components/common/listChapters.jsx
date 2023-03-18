import React from "react";

const ListChapters = (props) => {
  const { items, 
    selectedItem, 
    textProperty, 
    valueProperty, 
    onItemSelect} =
    props;

  return (

    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
);
};

ListChapters.defaultProps = {
  textProperty: "name",
  valueProperty: "Title",
};
export default ListChapters;
