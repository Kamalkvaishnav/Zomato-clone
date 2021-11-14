import React from "react";

function RestoCard({ imgUrl, restoName, discription, rating }) {
  return (
    <div className="p-6 ">
      <div className=" max-w-xs overflow-hidden shadow-lg rounded-md hover:scale-105 bg-white">
        <img className="w-full" src={imgUrl} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{restoName}</div>
          <div className="flex justify-between">
            <p className="text-gray-700 text-base">{discription}</p>
            <div className="p-3 bg-green-600 rounded text-white ">
              <span className="  justify-center flex ">
                {rating}
                <div className="text-xs mt-1 ml-1">
                  <i className="fas fa-star"></i>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #South Indian
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Mithai
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Pizza
          </span>
        </div>
      </div>
    </div>
  );
}

export default RestoCard;
