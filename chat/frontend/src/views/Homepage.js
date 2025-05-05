import React from 'react'
import './style/style.css'
import './style/media.css'
import { Link } from 'react-router-dom'

// Import images from src/Images
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import frame from '../Images/frame.jpg'
import frame3 from '../Images/frame 3.jpg'
import frame2 from '../Images/frame 2.jpg'
import fizza from '../Images/fizza.jpg'
import zainab from '../Images/zainab.jpg'
import Awais from '../Images/Awais.jpg'

function Homepage() {
  return (
    <div>
      <main>
      {/* Hero Section */}
      <section className="position-relative py-5 py-lg-9 overflow-hidden">
        {/* Decorative elements */}
        <div className="blur-circle bg-purple-200" style={{ width: '400px', height: '400px', top: '-100px', left: '-100px' }}></div>
        <div className="blur-circle bg-purple-200" style={{ width: '400px', height: '400px', bottom: '-100px', right: '-100px' }}></div>
        
        <div className="container position-relative px-3">  {/* Added px-3 */}
          <div className="row g-4 g-lg-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="mb-4">
                <div className="badge-pill-custom d-inline-flex align-items-center mb-3">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <span>Rated 4.9/5 by over 10,000 users</span>
                </div>
                <h1 className="display-4 fw-bold mb-3 heading">
                  Connect with anyone, <span className="text-gradient text-gradient-purple">anywhere</span>
                </h1>
                <p className="fs-5 text-secondary mb-4">
                  Our chat app makes it easy to stay connected with friends, family, and colleagues. Fast, secure, and
                  feature-rich messaging for the modern world.
                </p>
              </div>
              
              <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                <a href="/signup" className="btn btn-gradient btn-lg rounded-pill shadow px-4 py-3">
                  Get Started <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a href="#features" className="btn btn-outline-gradient btn-lg rounded-pill px-4 py-3 feature">
                  Learn More
                </a>
              </div>
              
              {/* Trust badges */}
              <div>
                <p className="text-secondary small mb-2">Trusted by companies worldwide</p>
                <div className="d-flex flex-wrap align-items-center gap-3 opacity-75">
                  <div className="small fw-semibold text-secondary">Acme Inc</div>
                  <div className="small fw-semibold text-secondary">Globex</div>
                  <div className="small fw-semibold text-secondary">Stark Industries</div>
                  <div className="small fw-semibold text-secondary">Wayne Enterprises</div>
                  <div className="small fw-semibold text-secondary">Umbrella Corp</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="position-relative" style={{ maxWidth: '500px' }}>
                {/* Phone mockup with chat interface */}
                <div className="phone-mockup mx-auto animate-float">
                  <div className="phone-status-bar"></div>
                  
                  {/* Chat interface */}
                  <div className="phone-screen">
                    {/* Chat header */}
                    <div className="d-flex align-items-center justify-content-between bg-gradient-purple p-3 text-white">
                      <div className="d-flex align-items-center gap-2">
                        <div className="rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                          <i className="bi bi-people-fill fs-6"></i>
                        </div>
                        <div>
                          <div className="fw-medium">Friends Group</div>
                          <div className="small text-white-50">5 members, 3 online</div>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <i className="bi bi-camera-video-fill"></i>
                        <div className="rounded-circle bg-success" style={{ width: '20px', height: '20px' }}></div>
                      </div>
                    </div>
                    
                    {/* Chat messages */}
                    <div className="p-3" style={{ height: 'calc(100% - 120px)', overflowY: 'auto' }}>
                      {/* Message bubbles */}
                      <div className="d-flex mb-3">
                        <div className="bg-white rounded p-3 shadow-sm" style={{ borderTopLeftRadius: '0' }}>
                          <p className="small text-dark mb-1">Hey everyone! How's it going?</p>
                          <p className="small text-secondary text-end mb-0">9:41 AM</p>
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-end mb-3">
                        <div className="bg-gradient-purple rounded p-3 shadow-sm text-white" style={{ borderTopRightRadius: '0' }}>
                          <p className="small mb-1">Great! Just finished my project 🎉</p>
                          <p className="small text-white-50 text-end mb-0">9:42 AM</p>
                        </div>
                      </div>
                      
                      <div className="d-flex mb-3">
                        <div className="bg-white rounded p-3 shadow-sm" style={{ borderTopLeftRadius: '0' }}>
                          <p className="small text-dark mb-1">Awesome! Let's celebrate this weekend!</p>
                          <p className="small text-secondary text-end mb-0">9:45 AM</p>
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-end mb-3">
                        <div className="bg-gradient-purple rounded p-3 shadow-sm text-white" style={{ borderTopRightRadius: '0' }}>
                          <p className="small mb-1">Sounds good to me!</p>
                          <p className="small text-white-50 text-end mb-0">9:46 AM</p>
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-center">
                        <div className="rounded-pill bg-light px-3 py-1 small text-secondary">
                          Today
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat input */}
                    <div className="position-absolute bottom-0 start-0 end-0 bg-white p-3">
                      <div className="d-flex align-items-center rounded-pill border bg-light px-3">
                        <i className="bi bi-emoji-smile text-secondary"></i>
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="form-control border-0 bg-transparent py-2 px-2"
                        />
                        <div className="d-flex gap-2">
                          <i className="bi bi-image text-secondary"></i>
                          <div className="rounded-circle bg-gradient-purple d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                            <i className="bi bi-arrow-right text-white" style={{ fontSize: '0.75rem' }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="blur-circle bg-purple-200" style={{ width: '250px', height: '250px', bottom: '-25px', right: '-25px' }}></div>
                <div className="blur-circle bg-purple-200" style={{ width: '250px', height: '250px', top: '-25px', left: '-25px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="position-relative py-5 py-md-7 py-lg-9">
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-to-b from-white to-purple-50"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <div className="badge-pill-custom d-inline-flex mb-3">
              <span>Features</span>
            </div>
            <h2 className="display-5 fw-bold mb-3 app">
              Everything you need in a <span className="text-gradient text-gradient-purple">chat app</span>
            </h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Our chat app comes with all the features you need to stay connected with the people who matter most.
            </p>
          </div>
          
          <div className="row g-4 g-lg-5 justify-content-center">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="feature-icon-wrapper bg-gradient-purple">
                  <i className="bi bi-chat-fill text-white fs-4"></i>
                </div>
                <div className="card-body text-center pt-4">
                  <h3 className="fs-4 fw-bold">Real-time Messaging</h3>
                  <p className="text-secondary">Send and receive messages instantly with our lightning-fast infrastructure.</p>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="feature-icon-wrapper" style={{ background: 'linear-gradient(to right, #7c3aed, #6366f1)' }}>
                  <i className="bi bi-shield-fill-check text-white fs-4"></i>
                </div>
                <div className="card-body text-center pt-4">
                  <h3 className="fs-4 fw-bold">End-to-End Encryption</h3>
                  <p className="text-secondary">Your conversations are secure with our advanced encryption technology.</p>
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="feature-icon-wrapper" style={{ background: 'linear-gradient(to right, #6366f1, #3b82f6)' }}>
                  <i className="bi bi-lightning-fill text-white fs-4"></i>
                </div>
                <div className="card-body text-center pt-4">
                  <h3 className="fs-4 fw-bold">Seamless Sync</h3>
                  <p className="text-secondary">Access your messages from any device with perfect synchronization.</p>
                </div>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="feature-icon-wrapper" style={{ background: 'linear-gradient(to right, #3b82f6, #0ea5e9)' }}>
                  <i className="bi bi-people-fill text-white fs-4"></i>
                </div>
                <div className="card-body text-center pt-4">
                  <h3 className="fs-4 fw-bold">Group Chats</h3>
                  <p className="text-secondary">Create groups with friends, family, or colleagues for team collaboration.</p>
                </div>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="feature-icon-wrapper" style={{ background: 'linear-gradient(to right, #0ea5e9, #14b8a6)' }}>
                  <i className="bi bi-image-fill text-white fs-4"></i>
                </div>
                <div className="card-body text-center pt-4">
                  <h3 className="fs-4 fw-bold">Media Sharing</h3>
                  <p className="text-secondary">Share photos, videos, and files with anyone in just a few taps.</p>
                </div>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="feature-icon-wrapper" style={{ background: 'linear-gradient(to right, #14b8a6, #22c55e)' }}>
                  <i className="bi bi-globe text-white fs-4"></i>
                </div>
                <div className="card-body text-center pt-4">
                  <h3 className="fs-4 fw-bold">Cross-Platform</h3>
                  <p className="text-secondary">Available on iOS, Android, Windows, Mac, and web browsers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-5 py-md-7 py-lg-9">
        <div className="container">
          <div className="text-center mb-5">
            <div className="badge-pill-custom d-inline-flex mb-3">
              <span>How It Works</span>
            </div>
            <h2 className="display-5 fw-bold mb-3">
              Simple, intuitive, and <span className="text-gradient text-gradient-purple">powerful</span>
            </h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Our chat app is designed to be easy to use while providing all the features you need.
            </p>
          </div>
          
          <div className="row g-4 g-lg-5 justify-content-center">
            <div className="col-lg-6">
        
            <div className="timeline-container ps-3 ps-md-4 timeline">  {/* Reduced from ps-5 ps-md-5 */}
                <div className="timeline-line newtime"></div>
                
                {/* Step 1 */}
                <div className="d-flex mb-5">
                  
                  <div className="ps-4">
                    <h3 className="fs-4 fw-bold">Sign Up</h3>
                    <p className="text-secondary">Create an account in seconds with just your email address.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="d-flex mb-5">
                
                  <div className="ps-4">
                    <h3 className="fs-4 fw-bold">Add Contacts</h3>
                    <p className="text-secondary">Find friends by username or invite them via email.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="d-flex mb-5">
                
                  <div className="ps-4">
                    <h3 className="fs-4 fw-bold">Start Chatting</h3>
                    <p className="text-secondary">Begin conversations with individuals or create group chats.</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="d-flex">
                  
                  <div className="ps-4">
                    <h3 className="fs-4 fw-bold">Stay Connected</h3>
                    <p className="text-secondary">Receive notifications and never miss an important message.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="position-relative" style={{ maxWidth: '400px' }}>
                {/* App screens carousel */}
                <div className="position-relative mx-auto animate-float" style={{ width: '250px', height: '500px', borderRadius: '40px', border: '10px solid #343a40', backgroundColor: 'white', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' }}>
                  <div className="position-absolute top-0 start-0 end-0 bg-dark" style={{ height: '24px', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
                  <div className="h-100 w-100 overflow-hidden rounded-4 bg-light">
                    {/* App screen content */}
                    <div className="h-80 w-100 bordered-box bg-gradient-purple p-3 text-white smallscreen">
                      <div className="d-flex flex-column h-100">
                        <div className="text-center py-4">
                          <div className="mx-auto rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                            <i className="bi bi-chat-fill fs-1"></i>
                          </div>
                          <h3 className="fs-3 fw-bold">ChatApp</h3>
                          <p className="text-white-50">Connect with anyone, anywhere</p>
                        </div>
                        
                        <div className="flex-grow-1 d-flex flex-column justify-content-center gap-3">
                          <div className="bg-white bg-opacity-10 backdrop-filter-blur rounded-4 p-3">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="rounded-circle bg-white bg-opacity-25" style={{ width: '40px', height: '40px' }}></div>
                              <div className="fw-medium">Create Account</div>
                            </div>
                            <div className="rounded bg-white bg-opacity-10" style={{ height: '32px' }}></div>
                            <div className="rounded bg-white bg-opacity-10 mt-2" style={{ height: '32px' }}></div>
                          </div>
                          
                          <div className="bg-white bg-opacity-10 backdrop-filter-blur rounded-4 p-3">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="rounded-circle bg-white bg-opacity-25" style={{ width: '40px', height: '40px' }}></div>
                              <div className="fw-medium">Find Friends</div>
                            </div>
                            <div className="rounded bg-white bg-opacity-10" style={{ height: '32px' }}></div>
                          </div>
                        </div>
                        
                        <div className="py-3">
                          <button className="btn btn-light text-purple w-100 fw-medium rounded-3 py-2 shadow">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="blur-circle bg-purple-200" style={{ width: '250px', height: '250px', bottom: '-25px', right: '-25px' }}></div>
                <div className="blur-circle bg-purple-200" style={{ width: '250px', height: '250px', top: '-25px', left: '-25px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="position-relative py-5 py-md-7 py-lg-9">
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-to-b from-white to-purple-50"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <div className="badge-pill-custom d-inline-flex mb-3">
              <span>Pricing</span>
            </div>
            <h2 className="display-5 fw-bold mb-3">
              Simple, transparent <span className="text-gradient text-gradient-purple">pricing</span>
            </h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Choose the plan that's right for you and start chatting today.
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {/* Free Plan */}
            <div className="col-md-6 col-lg-4">
              <div className="pricing-card card h-100 bg-gradient-gray border-0 p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <h3 className="fs-3 fw-bold">Free</h3>
                    <p className="text-secondary">Perfect for getting started</p>
                  </div>
                  <div className="d-flex align-items-baseline mb-4">
                    <span className="fs-1 fw-bold">$0</span>
                    <span className="ms-1 text-secondary">/month</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-purple me-2"></i>
                      <span>Up to 100 messages per day</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-purple me-2"></i>
                      <span>Basic group chats</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-purple me-2"></i>
                      <span>Mobile and desktop access</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <a href="/signup" className="btn btn-gradient w-100 rounded-3 py-2">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="col-md-6 col-lg-4">
              <div className="pricing-card pricing-popular position-relative">
                <div className="pricing-badge">Most Popular</div>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <h3 className="fs-3 fw-bold">Pro</h3>
                    <p className="text-white-50">For individuals and small teams</p>
                  </div>
                  <div className="d-flex align-items-baseline mb-4">
                    <span className="fs-1 fw-bold">$9.99</span>
                    <span className="ms-1 text-white-50">/month</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-white-50 me-2"></i>
                      <span>Unlimited messages</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-white-50 me-2"></i>
                      <span>Advanced group features</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-white-50 me-2"></i>
                      <span>File sharing up to 1GB</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-white-50 me-2"></i>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <a href="/signup" className="btn btn-light w-100 text-purple fw-medium rounded-3 py-2">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="col-md-6 col-lg-4">
              <div className="pricing-card card h-100 bg-gradient-gray border-0 p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <h3 className="fs-3 fw-bold">Enterprise</h3>
                    <p className="text-secondary">For large organizations</p>
                  </div>
                  <div className="mb-4">
                    <span className="fs-1 fw-bold">Custom</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-purple me-2"></i>
                      <span>Everything in Pro</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-purple me-2"></i>
                      <span>Custom integrations</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-check-circle-fill text-purple me-2"></i>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-purple me-2"></i>
                      <span>99.99% uptime SLA</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <a href="/contact" className="btn btn-outline-gradient w-100 rounded-3 py-2">
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 py-md-7 py-lg-9">
        <div className="container">
          <div className="text-center mb-5">
            <div className="badge-pill-custom d-inline-flex mb-3">
              <span>Testimonials</span>
            </div>
            <h2 className="display-5 fw-bold mb-3">
              Loved by users <span className="text-gradient text-gradient-purple">worldwide</span>
            </h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              See what our users have to say about our chat app.
            </p>
          </div>
          
          <div className="row g-4 g-lg-5 justify-content-center">
            {/* Testimonial 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="position-absolute" style={{ top: '-24px', left: '32px' }}>
                  <div className="rounded-circle border-4 border-white bg-gradient-purple shadow" style={{ width: '48px', height: '48px' }}>
                    <img className="member" src={Awais}></img>
                  </div>
                </div>
                
                <div className="card-body pt-3">
                  <div className="d-flex mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  
                  <p className="text-secondary fst-italic mb-4">"This chat app has completely transformed how our team communicates. It's intuitive, fast, and has all the features we need."</p>
                  
                  <div>
                    <h4 className="fs-5 fw-bold">Awais Ali Raza</h4>
                    <p className="small text-secondary">Full Stack Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="position-absolute" style={{ top: '-24px', left: '32px' }}>
                  <div className="rounded-circle border-4 border-white bg-gradient-purple shadow" style={{ width: '48px', height: '48px' }}>
                  <img className="member" src={zainab}></img>
                  </div>
                </div>
                
                <div className="card-body pt-3">
                  <div className="d-flex mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  
                  <p className="text-secondary fst-italic mb-4">"The end-to-end encryption and seamless sync across devices make this the perfect chat app for both work and personal use."</p>
                  
                  <div>
                    <h4 className="fs-5 fw-bold">Zainab Tariq</h4>
                    <p className="small text-secondary">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-feature h-100 position-relative pt-4">
                <div className="position-absolute" style={{ top: '-24px', left: '32px' }}>
                  <div className="rounded-circle border-4 border-white bg-gradient-purple shadow" style={{ width: '48px', height: '48px' }}>
                  <img className="member" src={fizza}></img>
                  </div>
                </div>
                
                <div className="card-body pt-3">
                  <div className="d-flex mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  
                  <p className="text-secondary fst-italic mb-4">"I've tried many chat apps, but this one stands out for its reliability and user-friendly interface. My team loves it!"</p>
                  
                  <div>
                    <h4 className="fs-5 fw-bold">Fizza Hafeez</h4>
                    <p className="small text-secondary">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="position-relative py-5 py-md-7 py-lg-9">
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-to-b from-white to-purple-50"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <div className="badge-pill-custom d-inline-flex mb-3">
              <span>FAQ</span>
            </div>
            <h2 className="display-5 fw-bold mb-3">
              Frequently asked <span className="text-gradient text-gradient-purple">questions</span>
            </h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Find answers to common questions about our chat app.
            </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {/* FAQ Item 1 */}
                <div className="card card-feature mb-3">
                  <div className="card-body p-4">
                    <h3 className="fs-4 fw-bold">Is my data secure?</h3>
                    <p className="text-secondary mt-2 mb-0">Yes, all messages are protected with end-to-end encryption, meaning only you and the intended recipients can read them. We never store your messages on our servers.</p>
                  </div>
                </div>
                
                {/* FAQ Item 2 */}
                <div className="card card-feature mb-3">
                  <div className="card-body p-4">
                    <h3 className="fs-4 fw-bold">Can I use the app on multiple devices?</h3>
                    <p className="text-secondary mt-2 mb-0">Our app syncs seamlessly across all your devices, including smartphones, tablets, and computers. Your conversations will always be up-to-date.</p>
                  </div>
                </div>
                
                {/* FAQ Item 3 */}
                <div className="card card-feature mb-3">
                  <div className="card-body p-4">
                    <h3 className="fs-4 fw-bold">What happens if I exceed my message limit on the free plan?</h3>
                    <p className="text-secondary mt-2 mb-0">If you reach your daily message limit on the free plan, you'll need to wait until the next day to send more messages or upgrade to our Pro plan for unlimited messaging.</p>
                  </div>
                </div>
                
                {/* FAQ Item 4 */}
                <div className="card card-feature">
                  <div className="card-body p-4">
                    <h3 className="fs-4 fw-bold">Can I cancel my subscription at any time?</h3>
                    <p className="text-secondary mt-2 mb-0">Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your current billing period.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 py-md-7 py-lg-9">
        <div className="container">
          <div className="cta-section bg-gradient-purple p-4 p-sm-5 p-md-7 shadow-lg">
            <div className="cta-blur" style={{ top: '-100px', right: '-100px' }}></div>
            <div className="cta-blur" style={{ bottom: '-100px', left: '-100px' }}></div>
            
            <div className="position-relative text-center text-white">
              <h2 className="display-5 fw-bold mb-3">
                Ready to start chatting?
              </h2>
              <p className="fs-5 text-white-50 mx-auto mb-4" style={{ maxWidth: '600px' }}>
                Join thousands of users who are already enjoying our chat app.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a href="/signup" className="btn btn-light btn-lg rounded-pill text-purple fw-medium px-4 py-3 shadow">
                  Get Started <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg rounded-pill px-4 py-3">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

      
    </div>
    
  )
}

export default Homepage
