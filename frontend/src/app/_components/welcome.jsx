import React from 'react';
import Image from 'next/image';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';

function LuxuryRestaurant() {
  return (
    <div className="container py-5 overflow-hidden">
      <div className="row align-items-center">
        {/* Images Section (6 columns) */}
        <div className="col-12 col-md-6 position-relative">
          {/* Image 2 (Background Image) */}
          <div className="position-relative">
            <Image
              src={img2}
              alt="Smiling Waiter with Plate"
              className="rounded border border-white shadow"
              width={300}
              height={300}
            />
          </div>

          {/* Image 1 (Centered on top of Image 2) */}
          <div
            className="position-absolute"
            style={{
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
            }}
          >
            <Image
              src={img1}
              alt="Waiter Serving Food"
              className="rounded shadow border-white "
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Text Section (6 columns) */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-4">
            Welcome TO Our <br /> Luxury Restaurant
          </h1>
          <p className="text-muted mb-4">
            Welcome to our exquisite salon, where beauty meets expertise. <br />
            Step into a world of luxury and indulgence, where we are <br />
            dedicated to enhancing your natural beauty and leaving <br />
            you feeling radiant.
          </p>
          <button className="btn btn-warning text-white px-4 py-2">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default LuxuryRestaurant;
