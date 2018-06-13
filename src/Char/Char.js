import React from 'react';


const char =(props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding:'8px',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center'
    }
    return (
        <div style={style}>
            {props.symbol}
        </div>
    )
}

export default char;