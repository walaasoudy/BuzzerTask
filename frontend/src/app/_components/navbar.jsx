import Image from "next/image"
import brand from '../../images/image.png'

function Navbar() {
  return (
    <>
{/* <Image src={brand} alt="brand" layout="fill" objectFit="cover" quality={100} /> */}
<nav className="navbar navbar-expand-lg navbar-white bg-white">
  <div className="container">
    <a className="navbar-brand" href="#">
      <Image
        src={brand}
        alt="Logo"
        style={{ height: "40px",width: "40px" }}
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
       <li className="nav-item d-flex align-items-center">
       <i className="fa-regular fa-user me-3"></i>
       <i className="fa-regular fa-bell"></i>
       
       </li>
       </ul>
    </div>
  </div>
</nav>



    </>
  )
}

export default Navbar