import React from "react";

function MenuCardForResto({ name, discription, imgUrl, rating, price }) {
  return (
    <div>
      <div class="p-6 ml-6 ">
        <div class=" max-w-4xl overflow-hidden shadow-lg rounded-md  bg-white">
          <div class=" flex ">
            <div>
              <img src={imgUrl}></img>
            </div>
            <div className="flex justify-between">
              <div class="  ml-7">
                <h1 className="font-bold mt-2 text-2xl ">{name}</h1>{" "}
                <p class="text-gray-400 text-base">{discription}</p>
                <p class="text-black-400 text-base font-bold">₹{price}</p>
                <div className="mt-3 bg-green-600 rounded max-h-10 w-12 text-white ">
                  <span className="  justify-center flex ">
                    {rating}
                    <div className="text-xs mt-1 ml-1">
                      <i class="fas fa-star"></i>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="addItem justify-between ml-auto mr-10 p-3 pb-12 flex border-3 mt-auto">
              <button class="bg-red-500 hover:bg-red-700 text-white ml-2 mr-2  p-0 rounded-lg w-24 text-center h-10">Remove</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCardForResto;
