import React from "react";
import MenuCard from "./MenuCard";

function RestoInfo({ name, discription, address, rating }) {
  return (
    <div>
      <div className="Restaurant-information align-middle flex-col max-w-7xl ml-auto mr-auto ">
      <div className="align-middle flex max-w-7xl ml-auto mr-auto">
          <h1 className="restoName text-5xl m-0 px-6">Restaurant's Name</h1>
          <div className="p-3 bg-green-600 rounded text-white ">
            <span className="  justify-center flex ">
              4.5
              {/* here we pass rating */}
              <div className="text-xs mt-1 ml-1">
                <i class="fas fa-star"></i>
              </div>
            </span>
          </div>
        </div>
        <p className="ml-1 px-6 pt-2">Pizza, Fast Food, Beverages</p>
        <p className="ml-1 px-6">Restaurant's Address</p>
        <p className="ml-1 px-6">
          Week days 9am-10pm | Weekends 11am-11pm <i class="far fa-clock"></i>
        </p>
        
        <br/>
        <br/>
      </div>
      <div className='text-4xl m-0 px-6 max-w-7xl ml-auto mr-auto mb-5'>Menu</div>
     
    </div>
  );
}

export default RestoInfo;
