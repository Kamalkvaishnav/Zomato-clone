import React from 'react'
import RestoImg from '../main/RestaurantPage/RestoImg'
import RestoInfo from '../main/RestaurantPage/RestoInfo'
import AddNewItem from './AddNewItem'
import MenuCardForResto from './MenuCardForResto'

function ForRestaurant() {
  return (
    <div>
      <RestoImg/>
      <RestoInfo/>
      <AddNewItem/>
      <MenuCardForResto
        name="Farmhouse"
        imgUrl="https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*"
        discription="Delightful combination of onion, capsicum, tomato & grilled mushroom"
        rating="4"
        price="399"
      />
      <MenuCardForResto
        name="Peppy Paneer"
        imgUrl="https://b.zmtcdn.com/data/dish_photos/410/06c9dcc4f29d4c1ef77171844560a410.jpg?fit=around|130:130&crop=130:130;*,*"
        discription="Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika "
        rating="4.5"
        price="299"
      />
      <MenuCardForResto
        name="Veggie Paradise"
        imgUrl="https://b.zmtcdn.com/data/dish_photos/c05/df0ae88dc7ca3e2d0f400193ddf0ac05.png?fit=around|130:130&crop=130:130;*,*"
        discription="Tomato, Jalapeno, Corn, Grilled Mushroom "
        rating="4.3"
        price="499"
      />


    </div>
  )
}

export default ForRestaurant
