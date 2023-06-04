//import React, { useState, useEffect } from 'react';
import './style.css';
const rooms = "https://imgs.search.brave.com/Nt-AKWqCLndPJdFFFvTXKbpwnwtNs4fCYeIo3fDciQA/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/aEJwMkFwLTVBYTVW/czdOdjJJT1V3SGFF/SyZwaWQ9QXBp";
const swimming = "https://imgs.search.brave.com/OZGGcqJTeFs_PAIcMUqUCL0x8qIGclPOwf2GZD3R3-k/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/VkNLZGwtSjRDSHc2/ZzdfbzNiMC1nSGFF/SyZwaWQ9QXBp";

function Home() {
  return (
    <>
      <div className="home">
        <h2>Home page</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</h3>
        <div className="home-img-container">
          <img src={ rooms } className="home-img" alt="" />
          <img src = { swimming} className="home-img" alt=""/>
        </div>
      </div>
    </>
  )
}

export default Home