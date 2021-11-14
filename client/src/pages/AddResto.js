import React from 'react'

function AddResto() {
  return (
    <div className="shadow p-6 max-w-4xl ml-24 mb-10 mt-10">
      <div className="text-4xl m-0 max-w-4xl ml-12 text-center mr-auto mb-5 ">Add Restaurant</div>
      <div className="flex-col flex-wrap ">
        <input placeholder="Restaurant's name" className="p-1 pl-2 m-2 w-96 ml-64 shadow rounded text-center"></input>
        <input placeholder="Restaurant's Discription" className="p-1 pl-2 m-2  w-96 ml-64 shadow rounded text-center"></input>
        <input placeholder="Restaurant's Main Image " className="p-1 pl-2 m-2 w-96 ml-64 shadow rounded text-center"></input>
        <input placeholder="Restaurant's Extra Image 1" className="p-1 pl-2  m-2 w-96 ml-64 shadow rounded text-center"></input>
        <input placeholder="Restaurant's Extra Image 2" className="p-1 pl-2  m-2 w-96 ml-64 shadow rounded text-center"></input>
        <input placeholder="Reataurant's Rating" className="p-1 m-2 w-96 ml-64  shadow rounded text-center"></input>

        <button class="bg-yellow-400 hover:bg-yellow-600 text-white ml-2 mb-5 mt-2 mr-2  p-0 rounded-lg w-96  ml-64 text-center h-10">
          Add Restaurant
        </button>
      </div>
      
    </div>
  )
}

export default AddResto
