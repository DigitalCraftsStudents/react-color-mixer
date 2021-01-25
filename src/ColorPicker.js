import React, { useState } from 'react';

function ColorPicker(props) {
    const [color, setColor] = useState(255);
    return (
        <>
            {props.label}: <input type="range" min="0" max="255" 
                value={color} 
                onChange={(event) => {
                    console.log(event.target.value);
                    setColor(event.target.value);
                    props.setColor(event.target.value);
                }}
            />
            {color}
        </>        
    );
}

export default ColorPicker;