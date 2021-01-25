import React from 'react';

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