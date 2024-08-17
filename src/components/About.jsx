import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-success fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Welcome to Quickcart, your go-to online destination for stylish, high-quality fashion. We offer a curated selection of trendy, comfortable, and affordable clothing for every occasion. With a focus on quality and customer satisfaction, we ensure a seamless shopping experience, fast shipping, and excellent service. Shop with us and elevate your style!
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-success px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.webp" alt="About Us" height="400px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
