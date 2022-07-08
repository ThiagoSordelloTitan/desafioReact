import React from 'react'
import ItemList from '../ItemList/ItemList'

const Home = () => {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white border-0">
        <img src="../assets/fondo.png" className="card-img" alt="fondo" height="700px"/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">Bienvenido a tu tienda favorita</h5>
            <p className="card-text lead fs-2">Descubrí los mejores productos</p>
            </div>
          </div>
      </div>
      <ItemList/>
    </div>
  )
}

export default Home