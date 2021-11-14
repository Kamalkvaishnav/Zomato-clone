import React, { useState } from "react";

function MenuCard({ name, discription, imgUrl, rating, price }) {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count>0){
      setCount(count - 1)
    };
  }
  return (
    <div class="p-6 ml-6 ">
      <div class=" max-w-4xl overflow-hidden shadow-lg rounded-md  bg-white">
        <div class=" flex ">
          <div>
            <img src={imgUrl}></img>
          </div>
          <div className="flex justify-between">
            <div class="  ml-7">
              <h1 className="font-bold mt-2 text-2xl ">{name}</h1> <p class="text-gray-400 text-base">{discription}</p>
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
          <div className="addItem justify-between ml-auto mr-10 p-3 flex border-3">
            <button
              className=" bg-gray-400 text-white m-auto rounded-lg  justify-center align-middle text-center text-xl w-10 "
              onClick={decrease}
            >
              -
            </button>
            <h1 className="text-xl border-2 rounded-lg ml-2 mr-2 p-1 m-auto bg-white-400 font-bold w-14 text-center h-10">
              {count}
            </h1>
            <button className=" bg-gray-400 text-white m-auto rounded-lg   text-xl w-10 " onClick={increase}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
