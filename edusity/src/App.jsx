import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

import { Circles } from 'react-loader-spinner'; // Import Loader


function App() {
  const [playState, setPlayState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });

    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set loader to show for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Circles
            height="80"
            width="80"
            color="#3498db"
            ariaLabel="circle-loading"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <div className="container">
            <Title subTitle="Our PROGRAM" title="What We Offer" />
            <Program />
            <About setPlayState={setPlayState} />
            <Title subTitle="Gallery" title="Campus Photos" />
            <Campus />
            <Title subTitle="TESTIMONIALS" title="What Student Says" />
            <Testimonials />
            <Title subTitle="Contact US" title="Get in Touch" />
            <Contact />
            <Footer />
          </div>
          <Videoplayer playState={playState} setPlayState={setPlayState} />
        </>
      )}
    </div>
  );
}

export default App;


