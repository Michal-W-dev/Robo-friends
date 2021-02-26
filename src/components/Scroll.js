import React from 'react';


export const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll', height: '78vh', borderTop: '4px solid rgba(246, 246, 255,0.4)'
        }}>
            { props.children}
        </div >
    )
}