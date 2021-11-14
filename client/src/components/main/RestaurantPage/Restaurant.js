import React from "react";
import Menu from "./RestoInfo";
import Header from "../../header";
import RestoInfo from "./RestoInfo";
import RestoImg from "./RestoImg";
import MenuCard from "./MenuCard";

function Restaurant() {
  return (
    <div>
      <div>
        <div className="RestoInfo ">
          <RestoImg />
          <RestoInfo />
          <MenuCard
            name="Farmhouse"
            imgUrl="https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*"
            discription="Delightful combination of onion, capsicum, tomato & grilled mushroom"
            rating="4"
            price="399"
          />
          <MenuCard
            name="Peppy Paneer"
            imgUrl="https://b.zmtcdn.com/data/dish_photos/410/06c9dcc4f29d4c1ef77171844560a410.jpg?fit=around|130:130&crop=130:130;*,*"
            discription="Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika "
            rating="4.5"
            price="299"
          />
          <MenuCard
            name="Veggie Paradise"
            imgUrl="https://b.zmtcdn.com/data/dish_photos/c05/df0ae88dc7ca3e2d0f400193ddf0ac05.png?fit=around|130:130&crop=130:130;*,*"
            discription="Tomato, Jalapeno, Corn, Grilled Mushroom "
            rating="4.3"
            price="499"
          />
          <MenuCard
            name="Veg Loaded"
            imgUrl="https://b.zmtcdn.com/data/dish_photos/08f/fe512af3ec693c508e8f10e3080d908f.jpg?fit=around|130:130&crop=130:130;*,*"
            discription="The awesome foursome! Golden corn, black olives, capsicum, red paprika"
            rating="5"
            price="399"
          />
          <MenuCard
            name="Deluxe Veggie"
            imgUrl="https://b.zmtcdn.com/data/dish_photos/e0c/84fccf641074d4aeeaf2fd37f53f6e0c.jpg?fit=around|130:130&crop=130:130;*,*"
            discription="Veg delight - onion, capsicum, grilled mushroom, corn & paneer"
            rating="4.2"
            price="299"
          />
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
