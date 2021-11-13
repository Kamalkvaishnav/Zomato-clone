import React from 'react'

function RestoCard(props) {
    return (
        <div class="p-6 ">  
        
        <div class=" max-w-xs overflow-hidden shadow-lg rounded-md hover:scale-105">
          <img class="w-full" src={props.imgUrl} alt="Mountain"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{props.restoName}</div>
            <p class="text-gray-700 text-base">
               {props.discription}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#South Indian</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mithai</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Pizza</span>
          </div>
        </div>
      </div>
    )
}

export default RestoCard
