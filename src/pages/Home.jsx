import React from 'react';
import test from "../images/test.jpg"
import slide1 from "../images/slide1.png"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='justify-center align-center'>
      <div className="carousel w-full max-h-full">
        <div id="1" className="carousel-item relative w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={test} className="max-w-xl rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Welcome to Udhamini Community</h1>
                <p className="py-6">Udhamini is a platform where students can get access to huge collection of Scolarships and apply for them. Thousands of students have benifited, and we are grand your here...</p>
                <button className="btn btn-outline btn-warning"><Link to="/register">Register To Get Started</Link></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#2" className="btn btn-circle text-3xl">👈</a>
            <a href="#2" className="btn btn-circle text-3xl">👉</a>
          </div>
        </div>
        <div id="2" className="carousel-item relative w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src={slide1} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Hear from Kevin Comba</h1>
                <p className="py-6 text-xl">I joined Udhamini community, 2022 january after hearing the benefits from a friend.I had a huge school balance which my parents were struggling with. Upon registering i was able to go through various available scolarships and luckily I was able to get <span className='badge text-lg text-yellow-500 font-bold mx-1 py-2'>$10,000 </span>funded my school fees</p>
                <button className="btn btn-info btn-outline"><Link to="/register">Register To Get Started</Link></button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#1" className="btn btn-circle text-3xl">👈</a>
            <a href="#1" className="btn btn-circle text-3xl">👉</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home