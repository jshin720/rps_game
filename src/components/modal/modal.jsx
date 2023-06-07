import React from "react";
import CloseIcon from "../../images/icon-close.svg";
import Rules from "../../images/image-rules.svg";
import { ReactSVG } from "react-svg";
import "./modal.css";

export default function modal({ openModal, onClose }) {
  if (!openModal) return null;

  return (
    <>
      <div className="overlay">
        <div className="rules-modal" onClick={onClose}>
          <span className="modal-header">
            <h1>Rules</h1>
            <ReactSVG src={CloseIcon} className="close-icon"/>
          </span>
          <div className="beats-container">
            <ReactSVG src={Rules} className="rules-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
