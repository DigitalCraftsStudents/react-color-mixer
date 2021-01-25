
import './App.css';

import { useState } from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const [red, setRed] = useState(255); // red
  const [green, setGreen] = useState(255); // green
  const [blue, setBlue] = useState(255); // blue

  // fakey-changey the "body" (but really the App component)
  // CSS-in-JS
  const appStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };

  return (
    <div className="fakey-body" style={appStyle}>

      <ColorPicker
        label="Red"
        color={red}
        setColor={setRed}
      />

      <br />
      <ColorPicker 
        label="Green"
        color={green}
        setColor={setGreen}
      />

      <br />
      <ColorPicker 
        label="Blue"
        color={blue}
        setColor={setBlue}
      />      
    </div>
  );
}

export default App;
