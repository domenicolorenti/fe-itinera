import React from 'react'

const Home = (props: any) => {
  return (
    <div id="home-page" className="justify-center h-screen w-full">
      <div id="search-section" className="bg-opacity-50 bg-cover bg-center h-auto flex flex-col w-full items-center justify-center" style={{ backgroundImage: `url(${require('../../res/home-bg.jpeg')})` }}>
        <h1 className="text-5xl mt-24">Dove si va?</h1>
        <input className="z-20 w-9/12 sm:w-1/2 h-12 rounded-xl text-xl my-24" type="text"/>
      </div>
    </div>
  )
}

export default Home;