import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SliderGroup from './components/SliderGroup';
import MicrophoneInput from './components/MicrophoneInput';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function App(props) {
  const sliderTitles = ["Fixed Acidity", "Volatile Acidity", "Citric Acid", "Residual Sugar", "Chlorides", "Free Sulphur Dioxide", "Total Sulphur Dioxide", "Density", "pH", "Sulphates", "Alcohol"];
  const [ count, setCount ] = useState(0);

  const decrementCount = () => { setCount(count - 1); }
  const incrementCount = () => { setCount(count + 1); }

  if (count > 3) {
    setCount(0);
  } else if (count < 0) {
    setCount(3);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="mic-container">
          <MicrophoneInput />
        </div>
        <div className="right-section">
          <SliderGroup slider1={sliderTitles[0 + count * 3]} slider2={sliderTitles[1 + count * 3]} slider3={(count !== 3) ? sliderTitles[2 + count * 3] : "" } count={count} />
          <div className="navigation">
            <FontAwesomeIcon icon={faAngleLeft} className={`prev ${count === 0} 'disabled' : ''}`} onClick={decrementCount} style={{ fontSize: '25px', paddingRight: '250px', paddingLeft: '0px', marginLeft: "4rem" }} />
            <FontAwesomeIcon icon={faAngleRight} className={`next ${count === 3} 'disabled' : ''}`} onClick={incrementCount} style={{ fontSize: '25px' }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;