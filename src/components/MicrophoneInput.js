import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import TextArea from './TextArea';
import 'C:/Users/anshv/OneDrive/Desktop/Ansh Personal/Inspired Singapore/WiKnow/wiknow/src/styles/MicrophoneInput.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const MicrophoneInput = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [ isRecording, setIsRecording ] = useState(false);
  const [outputText, setOutput] = useState('');
  const genAI = new GoogleGenerativeAI('AIzaSyCroktHX2avCET9Ug_X1M11r52-EVsnsJM');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const wine_phrases = ["This wine seems to have a purity of fruit in this wine is remarkable.", "This wine exemplifies elegance and finesse", "This wine looks to have a really good quality. Each sip of this wine reveals layers of complexity with intricate flavors.", "Pleasant and easy drinking with straightforward flavors accurately describes this wine.", "This wine seems to be decent enough to drink.", "Balanced and Approachabkle. Perfect for a relaxing drinking.", "This wine lacks depth and complexity with one dimensional flavours.", "The acidity in this wine seems to be harsh and unbalanced", "There are off-putting aromas of vinegar and mustinness in this wine.", "The wine seems to be unpleasant to drink and lacking in refinement."]
  const msg = new SpeechSynthesisUtterance();
  const msgRef = useRef(msg);
  const [isRandom, setRandom] = useState(false);

  useEffect(() => {
    msgRef.current.text = outputText;
    speechSynthesis.speak(msgRef.current);
  }, [outputText]);

  async function aiRun(input) {
    // if (input.includes("red wine") || input.includes("white wine")) {
    //   setOutput("Oh that's great!, Let me help you out with its quality, kindly provide me with its parameters.");
    //   return null;
    // }
    try {
      const result = await model.generateContent(input);
      const response = result.response;
      let text = response.text();
      text = text.replace(/\*/g, '');
      setOutput(text);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const handleMicButtonClick = async (e) => {
    setIsRecording(!isRecording);
    setRandom(false);
    if (!isRecording) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
      await aiRun(transcript);
      resetTranscript();
    }
  };

  const handleSubmit = () => {
    const randomIndex = Math.floor(Math.random() * wine_phrases.length);
    const text = isRandom ? wine_phrases[randomIndex] : outputText;
    setRandom(true);
    setOutput(text);
  };

  return (
    <>
      <TextArea transcript={isRecording ? transcript : outputText } style={{ paddingRight: "25px" }} />
      <div style={{display: "flex", flexDirection: "column", marginLeft: "0px"}}>
        <button className="MicButton" onClick={handleMicButtonClick}>
          <i className={`fas fa-microphone${isRecording ? '' : '-slash'}`}></i>
        </button>
        <div className="ButtonGroup"> 
          <button id='b2' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default MicrophoneInput;