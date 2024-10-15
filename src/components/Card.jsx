import React from 'react'

function Card(props) {
    const {name,branch,delivery,district,division} = props
  return (
    <div className='card'>
    <div className='qa'>
        <h4>Name:</h4>
        <p>{name}</p>
    </div>
    <div className='qa'>
        <h4>Branch Type:</h4>
        <p>{branch}</p>
    </div>
    <div className='qa'>
        <h4>Delivery Status:</h4>
        <p>{delivery}</p>
    </div>
    <div className='qa'>
        <h4>District:</h4>
        <p>{district}</p>
    </div>
    <div className='qa'>
        <h4>Division:</h4>
        <p>{division}</p>
    </div>
</div>
  )
}

export default Card