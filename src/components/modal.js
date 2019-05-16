import React from "react"

// Use the globally available context to choose the right path
const Modal = () => (
    <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="img01"></img>
        <div id="caption"></div>
    </div>
)

export default Modal;