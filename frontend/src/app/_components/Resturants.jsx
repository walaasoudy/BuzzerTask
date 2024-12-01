'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const imageUrls = [
    'http://localhost:3000/uploads/1732618220343-3.png',
    'http://localhost:3000/uploads/1732618408948-4.png',
    'http://localhost:3000/uploads/1732618432018-5.png',
    'http://localhost:3000/uploads/1732618461461-6.png',
  ];

  // Fetch restaurant data
  const fetchRestaurants = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/restaurants');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRestaurants(data); // Set restaurant data
    } catch (error) {
      console.error('Error fetching restaurants:', error.message);
    }
  };

  useEffect(() => {
    fetchRestaurants(); // Fetch restaurants when component mounts
  }, []);

  return (
    <div className="container mb-5 p-5">
      <h1 className="m-auto text-center mb-5">Our Restaurants</h1>
      <div className="row">
        {imageUrls.map((url, index) => (
          <div className="col-md-3 border-1 shadow-sm pb-4" key={index}>
            <Image
              src={url}
              alt={`Restaurant ${index + 1}`}
              className="w-100"
              height={200}
              width={200}
              style={{
                borderBottomLeftRadius: '100px',
                borderBottomRightRadius: '100px',
              }}
            />
            <li
              className="d-flex justify-content-center align-items-center mb-3"
              style={{
                listStyleType: 'none',
                marginTop: '10px',
              }}
            >
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-solid fa-star me-2"></i>
              <i className="fa-regular fa-star me-2"></i>
            </li>
            <h6 className="text-center">{restaurants[index]?.title || 'Loading...'}</h6>
            <h6 className="text-center text-danger mb-2">
              {restaurants[index]?.type || 'Loading...'}
            </h6>
            <div>
              <i className="fa-solid fa-location-dot me-2"></i>
              {restaurants[index]?.location || 'Loading...'}
            </div>
          </div>
        ))}
      </div>
      <div className="m-auto text-center mt-3">
        <button className="btn btn-outline-warning text-dark px-4 py-2">View All</button>
      </div>
    </div>
  );
}

export default Restaurants;
