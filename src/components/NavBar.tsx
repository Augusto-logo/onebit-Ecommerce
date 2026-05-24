import React from 'react'

export default function NavBar() {
  return (
    <div>
       <nav className="bg-black text-white p-4 flex justify-between">

      <div>
        <h1 className="text-orange-500 text-2xl">
          RUNMAX
        </h1>

        <p className="text-gray-400 text-sm">
          SNEAKERS
        </p>
      </div>

      <button className="bg-orange-500 p-2 rounded">
        COMPRAR
      </button>

    </nav>
    </div>
  )
}
