import React from 'react'
import Image from 'next/image'

import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
import s4 from '../../images/s4.png'
function Services() {
  return (
    <>
    <div className="container mb-5 ">
    <h1 className='m-auto text-center mb-5'>our Services</h1>
        <div className="row">
            <div className="col-md-3">
                <Image src={s1} alt='g1' className='w-100  rounded ' height={300} />
            </div>
            <div className="col-md-3">
                <Image src={s2} alt='g2' className='w-100  rounded' height={300} />
            </div> <div className="col-md-3">
                <Image src={s3} alt='g3' className='w-100 rounded'height={300} />
            </div> 
            <div className="col-md-3" >
                <Image src={s4} alt='g4'  className='w-100  rounded'height={300} />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Services