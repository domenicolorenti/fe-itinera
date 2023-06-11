import React from 'react'

const ResultCard = (props: any) => {
  return (
    <div className="flex flex-row my-4 border rounded-2xl">
      <img
        className="w-1/3 rounded-l-xl"
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt=""
      />
      <div className="w-2/3 justify-center p-4">
        <h1 className="text-2xl">Rensturant Name</h1>
        <h3>Rensturant Via</h3>
      </div>
    </div>
  )
}

export default ResultCard