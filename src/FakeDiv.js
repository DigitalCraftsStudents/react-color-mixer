import React from 'react';

// props.children is built-into React.
// Any Components in between <FakeDiv></FakeDiv>
// will be put into props.children
// To show them, we render {props.children}
function FakeDiv(props) {
    return (
        <div 
            style={props.style}
            className={props.className}
        >
            {props.children}
        </div>
    );    
}

export default FakeDiv;