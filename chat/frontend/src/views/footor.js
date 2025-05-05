
import React from 'react';
import './style/style.css'
import logo from '../Images/logo.jpg'


function Footer() {
  return (
    <footer className="border-top py-5 newfootor">
      <div className="container">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-3 col-md-6">
            <div className="mb-4">
              <a href="/" className="d-flex align-items-center text-decoration-none mb-3">
                
                <img className='logo ' src={logo}></img>
                <span className="ms-2 fs-4 fw-bold"></span>
              </a>
              <p className="text-secondary small">
                Connect with anyone, anywhere with our secure and feature-rich chat application.
              </p>
            </div>
            <div className="d-flex gap-3">
              <a href="https://twitter.com" className="text-secondary hover-text-dark" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">Twitter</span>
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="https://facebook.com" className="text-secondary hover-text-dark" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">Facebook</span>
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://instagram.com" className="text-secondary hover-text-dark" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">Instagram</span>
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://github.com" className="text-secondary hover-text-dark" target="_blank" rel="noopener noreferrer">
                <span className="visually-hidden">GitHub</span>
                <i className="bi bi-github fs-5"></i>
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fs-6 text-uppercase fw-bold mb-3">Product</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#features" className="text-decoration-none text-secondary hover-text-dark">Features</a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-decoration-none text-secondary hover-text-dark">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="text-decoration-none text-secondary hover-text-dark">FAQ</a>
              </li>
              <li>
                <a href="#testimonials" className="text-decoration-none text-secondary hover-text-dark">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fs-6 text-uppercase fw-bold mb-3">Company</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/about" className="text-decoration-none text-secondary hover-text-dark">About</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="text-decoration-none text-secondary hover-text-dark">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="text-decoration-none text-secondary hover-text-dark">Careers</a>
              </li>
              <li>
                <a href="/press" className="text-decoration-none text-secondary hover-text-dark">Press</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fs-6 text-uppercase fw-bold mb-3">Legal</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/privacy" className="text-decoration-none text-secondary hover-text-dark">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="text-decoration-none text-secondary hover-text-dark">Terms</a>
              </li>
              <li className="mb-2">
                <a href="/cookies" className="text-decoration-none text-secondary hover-text-dark">Cookies</a>
              </li>
              <li>
                <a href="/licenses" className="text-decoration-none text-secondary hover-text-dark">Licenses</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top mt-4 pt-4 text-center text-secondary small">
          © {new Date().getFullYear()} ChatApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
