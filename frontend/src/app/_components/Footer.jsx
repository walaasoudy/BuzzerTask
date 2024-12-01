import React from 'react';
import Image from 'next/image';
import footer from '../../images/footer.png'; // Assuming the image is in this path

function Footer() {
  return (
    <div 
      style={{
        position: 'relative', // Ensures the overlay stays positioned correctly
        backgroundImage: `url(${footer.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
     
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust opacity here
          zIndex: 1, // Places the overlay below the content
        }}
      ></div>

      {/* Footer Content */}
      <div
        style={{
          position: 'relative', // Ensures content stays above the overlay
          zIndex: 2,
          padding: '50px 20px',
        }}
      >
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-3">
              <h2>BUZZER APP</h2>
              <p>
                These guys have been absolutely outstanding. When I needed them,
                they came through in a big way! I know that if you buy this theme.
              </p>
              <h5>CONTACT INFO</h5>
              <p>📞 +91 1234567891</p>
              <p>📧 munasbas007@gmail.com</p>
            </div>

            {/* Middle Section */}
            <div className="col-md-3">
                <div className="container">
                    <div className="row">
                    <h5 >ACCOUNT</h5>
                    
                
                <ul style={{ listStyle: 'none' }}>
  <li style={{ color: 'white', cursor: 'pointer' }}>Home</li>
  <li style={{ color: 'white', cursor: 'pointer' }}>About Us</li>
  <li style={{ color: 'white', cursor: 'pointer' }}>Contact Us</li>
</ul>
                </div>
                </div>         
 
</div>
<div className="col-md-3">
<div className="container">
<div className="row">

<h5>LEGALS</h5>

              <ul style={{ listStyle: 'none' }}>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
</div></div>
</div>
             
           

           
            <div className="col-md-3">
              <h5>SUBSCRIBE</h5>
              <div className="subscribe-box">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  style={{
                    width: '60%',
                    padding: '10px',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                />
                <button
                  style={{
                    padding: '10px 20px',
                    marginLeft: '10px',
                    backgroundColor: '#f0ad4e',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <hr style={{ borderColor: 'white', margin: '20px 0' }} />

          <div className="text-center">
          <i className="fa-brands fa-twitter me-2"></i>
          <i className="fa-brands fa-facebook me-2"></i>
         
          <i className="fa-brands fa-youtube me-2"></i>
          <i className="fa-brands fa-instagram me-2"></i>
          <i className="fa-brands fa-linkedin me-2"></i>
          </div>

       
          <div className="text-center mt-3">
            <p>©2023 For Salone All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
