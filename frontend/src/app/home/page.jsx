import Image from 'next/image';
import home from '../../images/home.jpeg';
import LuxuryRestaurant from '../_components/welcome';
import Gallery from '../_components/Gallery';
import Services from '../_components/Services';
import Restaurants from '../_components/Resturants';
import Navbar from '../_components/navbar';
import Nearest from '../_components/Nearest';
import Footer from '../_components/Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background Image */}
      <Image
        src={home}
        alt="home"
        layout="fill"
        objectFit="cover" // Ensures the image covers the background
        quality={100} // Optional: High quality for better appearance
      />

      {/* Content Over the Background */}
      <div
        style={{
          position: 'absolute', // Overlay on top of the image
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex', // Enables flexbox
          flexDirection: 'column', // Align items vertically
          alignItems: 'flex-start', // Aligns content to the left
          justifyContent: 'center', // Centers content vertically
          color: 'white', // Text color
          textAlign: 'left', // Align text to the left
          padding: '50px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Food Mood</h1>
        <p style={{ maxWidth: '500px', lineHeight: '1.8', fontSize: '1rem' }} >
          Welcome to our exquisite salon, where beauty meets expertise.
          Step into a world of luxury and indulgence, where we are
          dedicated to enhancing your natural beauty and leaving
          you feeling radiant.
        </p>
      </div>
    </div>

    <LuxuryRestaurant/>
    <Restaurants/>
    <Services/>
    <Nearest/>
    <Gallery/>
    <Footer/>
    
    </> 
  );
}

export default Home;
