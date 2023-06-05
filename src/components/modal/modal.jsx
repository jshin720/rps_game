import React from 'react'

export default function modal(props) {
  const {setOpenModal, openModal} = props;

  if (!openModal) return null;
  
  return (
    <div className="overlay">
      <div className="rules-modal">
        <h1>Rules</h1>
        <p className="close-button" o>X</p>
        <div className="beats-container">
          <ul>
            <li>paper</li>
            <li>beats</li>
            <li>scissors</li>
            <li>beats</li>
            <li>rock</li>
            <li>beats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
