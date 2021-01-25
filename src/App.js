
import './App.css';

import { useState } from 'react';
import ColorPicker from './ColorPicker';
import FakeDiv from './FakeDiv';

function App() {
  const [red, setRed] = useState(25); // red
  const [green, setGreen] = useState(255); // green
  const [blue, setBlue] = useState(25); // blue

  // fakey-changey the "body" (but really the App component)
  // CSS-in-JS
  const appStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };

  return (
    <FakeDiv 
      className="fakey-body" 
      style={appStyle}
      children="whatevs what kids"
    >
 
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
   
   
    </FakeDiv>
   
  );
}

export default App;
