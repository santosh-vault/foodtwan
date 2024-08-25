import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat at
        nostrum excepturi corporis maxime adipisci, eveniet quidem consequuntur
        hic totam?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div className="explore-menu-list-item" key={item.id || index}>
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
