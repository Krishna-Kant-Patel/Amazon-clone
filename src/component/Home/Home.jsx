import React from 'react'
import './style.css';
import Product from '../Product/Product';
function Home() {
  return (
    <>
      <div className="container">
        <img className='homeImage' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        

      </div>
      <div className="productContainer">
      <Product 
      id='98'
      title={"Pyle 1000W Portable Bluetooth PA Speaker - 10'' Karaoke Speaker System with UHF Wireless Microphone, Remote Control"}
      price={113.99}
      image={"https://m.media-amazon.com/images/I/816M3NtyaDL._AC_SL1500_.jpg"}
      rating={4}

      />
      <Product 
      id='56'
      title={"When Technology Fails: A Manual for Self-Reliance, Sustainability, and Surviving the Long Emergency, 2nd Edition"}
      price={100}
      image={"https://m.media-amazon.com/images/P/1933392452.01._SCLZZZZZZZ_SX500_.jpg"}
      rating={3}

      />
      </div>
      <div className="productContainer">
      <Product 
      id='45'
      title={"Simple Deluxe Office Computer Ergonomic Video Game, Red Chair, Without footrest"}
      price={107.99}
      image={"https://m.media-amazon.com/images/I/81ZcG6Rv-NL._AC_SL1500_.jpg"}
      rating={5}

      />
      <Product 
      id={4}
      title={"Pyle 1000W Portable Bluetooth PA Speaker - 10'' Karaoke Speaker System with UHF Wireless Microphone, Remote Control"}
      price={113.99}
      image={"https://m.media-amazon.com/images/I/816M3NtyaDL._AC_SL1500_.jpg"}
      rating={4}

      />
      <Product 
      id={4}
      title={"Pyle 1000W Portable Bluetooth PA Speaker - 10'' Karaoke Speaker System with UHF Wireless Microphone, Remote Control"}
      price={113.99}
      image={"https://m.media-amazon.com/images/I/816M3NtyaDL._AC_SL1500_.jpg"}
      rating={4}

      />
      </div>
    </>
  )
}

export default Home
