import React from "react";

export default function modal({ openModal, onClose }) {
  if (!openModal) return null;

  return (
    <div className="overlay">
      <div className="rules-modal">
        <span className="modal-header">
          <h1>Rules</h1>
          <p className="close-btn" onClick={onClose}>
            X
          </p>
        </span>
        <div className="beats-container">
          <ul>
            <li>paper</li>
            <span>
              <h5>beats</h5>
              <h7>arrow</h7>
            </span>
            <li>scissors</li>
            <span>
              <h5>beats</h5>
              <h7>arrow</h7>
            </span>
            <li>rock</li>
            <span>
              <h5>beats</h5>
              <h7>arrow</h7>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
