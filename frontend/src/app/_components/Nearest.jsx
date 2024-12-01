import React from 'react'
import Restaurants from './Resturants'

function Nearest() {
  return (
    <div>
        
        <div className="container">
        <h1 className='text-center mb-5'>Nearest Restaurants</h1>
        <div className="row">
  <div className="col-md-11">
    <input type="text" className="form-control" placeholder='search'/>
  </div>
  <div className="col-md-1">
    <button className="btn btn-warning text-white">Search</button>
  </div>
</div>

        </div>
      <Restaurants/>
    </div>
  )
}

export default Nearest
