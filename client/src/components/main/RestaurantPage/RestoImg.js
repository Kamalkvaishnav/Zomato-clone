import React from 'react'

function RestoImg() {
  return (
    <div>
      <div className="Restaurant-image align-middle flex max-w-7xl ml-auto p-6 mr-auto flex-wrap h-auto">
            <img
              className="rounded-lg h-96  hover:scale-105 "
              src="https://b.zmtcdn.com/data/pictures/4/100104/7398da37ab73c4c7cb16ac860e577369.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ></img>
            <div className="extra-restoimg">
              <img
                className=" pl-6 h-44 rounded-lg mb-7 hover:scale-105"
                src="https://b.zmtcdn.com/data/pictures/chains/4/100104/bb79cddbdb95e377aa637b2db3982b45.jpg?fit=around|300:273&crop=300:273;*,*"
              ></img>
              <img
                className=" pl-6 h-44 rounded-lg  hover:scale-105"
                src="https://b.zmtcdn.com/data/pictures/chains/4/100104/fbc2c4c9e55a3f011c493dda79c399f5.jpg?fit=around|300:273&crop=300:273;*,*"
              ></img>
            </div>
          </div>
    </div>
  )
}

export default RestoImg
