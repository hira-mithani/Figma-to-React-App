import React from 'react'
import LOGO from "../../assets/logo.png"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <img src={LOGO} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-5">
                            <li className="nav-item nav-underline">
                                <a className="nav-link active text-blcak" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Contact us</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-5">
                            <button className='btn text-black'>Login</button>
                            <button style={{ backgroundColor: '#EF8D21', }} className='btn rounded-pill text-white py-2 px-4 fs-6'>
                                Book Scooter
                            </button>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header