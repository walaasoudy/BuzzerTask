import Image from 'next/image'
import React from 'react'
import g1 from '../../images/g1.jpeg'
import g2 from '../../images/g2.png'
import g3 from '../../images/g3.png'
import g4 from '../../images/g4.jpeg'

function Gallery() {
  return (
    <>
    <div className="container ">
    <h1 className='m-auto text-center mb-5'>Gallery</h1>
        <div className="row">
            <div className="col-md-3">
                <Image src={g1} alt='g1' className='w-100 h-50 rounded ' />
            </div>
            <div className="col-md-3">
                <Image src={g2} alt='g2' className='w-100 h-50 rounded' />
            </div> <div className="col-md-3">
                <Image src={g3} alt='g3' className='w-100 h-50 rounded' />
            </div> 
            <div className="col-md-3" >
                <Image src={g4} alt='g4'  className='w-100 h-50 rounded' />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Gallery