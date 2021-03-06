import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { ProfileImg, Robot, RobotPink, RobotPinkTrans, arrow } from './images'
import CardTestimonial from './Components/CardTestimonial/CardTestimonial'
import CardHelp from './Components/CardHelp/CardHelp'
import axios from 'axios'

function App() {
  const ref = useRef(null)

  const [testi, setTesti] = useState([]);
  const [tips, setTips] = useState([]);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  }

  useEffect(() => {
    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => {
        setTesti(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((res) => {
        setTips(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <nav className="app-nav">
        <img src={ProfileImg} alt="" className="nav-img" />
        <div className="nav-mid">
          <p className="nav-mid-top">Good Morning</p>
          <h5 className="nav-mid-bot">Fellas</h5>
        </div>
      </nav>
      <header className="App-header">
        <h1 className="txt-anim">WEEKEND FROM HOME</h1>
        <p className="header-desc txt-anim2">Stay active with a little workout.</p>
        <img src={Robot} alt="" className="header-robot txt-anim" />
        <button className="header-btn txt-anim2">Let's Go</button>
      </header>
      <section className="sect-top">
        <img src={RobotPink} alt="" className="sect-top-img" />
        <div className="sect-top-desc">
          <p className="top-desc-top txt-anim2"><span className="top-desc-top-span">Definition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
          <p className="top-desc-bot txt-anim2">-weekend team</p>
        </div>
        <div className="sect-top-testimonial">
          <div className="circle h2-mg2"></div>
          <h2 className="testi-title h2-mg2">Testimonial</h2>
          <div className="top-testi">
            {testi.length !== 0 &&
              <>
                <button className="btn-arr left ab" onClick={() => scroll(-100)}><img src={arrow} alt="" className="img-arr-btn" /></button>
                <div className="top-testi-display" ref={ref}>
                  {testi.map((item) => {
                    return <CardTestimonial testimonial={item.testimony} by={item.by} key={item.id} />
                  })}
                </div>
                <button className="btn-arr ab right" onClick={() => scroll(100)}><img src={arrow} alt="" className="img-arr-btn" /></button>
              </>
            }
          </div>

        </div>
      </section>
      <section className="sect-bot">
        <h2 className="h2-ta h2-mg2">POV</h2>
        <p className="sect-bot-p white h2-ta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <h2 className="h2-ta h2-mg2">Resource</h2>
        <p className="sect-bot-p white h2-ta">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
        <h2 className="h2-ta h2-mg2">Help & Tips</h2>
        {tips.length !== 0 &&
          <div className="sect-bot-card">
            {tips.map((item) => {
              return <CardHelp title={item.title} image={item.image} key={item.id} />
            })}
          </div>
        }
        <h2 className="h2-ta h2-mg2">You're all set.</h2>
        <p className="sect-bot-p white h2-ta">The wise man therefore always holds in these matters to this principle of selection.</p>
      </section>
      <section className="image-sect">
        <img src={RobotPinkTrans} alt="" className="img-foot" />
      </section>
      <footer className="footer">
        <h4 className="foot-h4 white">wknd@<span className="foot-year">2020</span></h4>
        <div className="footer-right">
          <p className="foot-p white">alpha version 0.1</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
