import React from 'react'

export default function ImageContainer(props) {
    const show = () => { 
        console.log("how to send signal to Modal to show itself")
    }
    return (<span className="myImg" onClick={show}>{props.children}</span>)
}