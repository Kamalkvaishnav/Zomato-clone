import React from "react";

function AddNewItem() {
  return (
    <div className="shadow p-6 max-w-4xl ml-12">
      <div className="text-4xl m-0 max-w-7xl ml-auto mr-auto mb-5 ">Add new Item</div>
      <div className="flex-col flex-wrap ">
        <input placeholder="Item's name" className="p-1 pl-2 m-2 w-72"></input>
        <input placeholder="Item's Discription" className="p-1 pl-2 m-2 w-72"></input>
        <input placeholder="Item's Image Url" className="p-1 pl-2 m-2 w-72"></input>
        <input placeholder="Item's Price" className="p-1 pl-2  m-2 w-72"></input>
        <input placeholder="Item's Rating" className="p-1 m-2 w-72"></input>

        <button class="bg-yellow-400 hover:bg-yellow-600 text-white ml-2 mr-2  p-0 rounded-lg w-52 ml-12 text-center h-10">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddNewItem;
