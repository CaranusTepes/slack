import React from "react";
import { FiX } from "react-icons/fi";
import "./modal.css";

function Modals({
  children,
  title,
  modalTitle,
  handleClose,
  handleCloseBackdrop,
  modalSubtitle,
}) {
  return (
    <div className="modal-backdrop" onClick={handleCloseBackdrop}>
      <div className="modal-container" title={title}>
        <div className="modal-header">
          <div className="modal-header-title">
            <span className="modal-title">{modalTitle}</span>
            <span className="btn-close-icon-modal" onClick={handleClose}>
              <FiX />
            </span>
          </div>
          <div className="modal-header-subtitle">
            <p>{modalSubtitle}</p>
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modals;
