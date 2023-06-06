import React from "react";
import CloseIcon from "../../images/icon-close.svg";
import Rules from "../../images/image-rules.svg";
import { ReactSVG } from "react-svg";

export default function modal({ openModal, onClose }) {
  if (!openModal) return null;

  return (
    <div className="overlay">
      <div className="rules-modal">
        <span className="modal-header">
          <h1>Rules</h1>
            <ReactSVG src={CloseIcon} onClick={onClose} />
        </span>
        <div className="beats-container">
          <ReactSVG src={Rules} />
        </div>
      </div>
    </div>
  );
}
