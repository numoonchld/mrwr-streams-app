import React from "react";
import ReactDOM from "react-dom";


const Modal = ({ title, content, actionButtons, onDismiss}) => {
  return ReactDOM.createPortal(
    <>
      <div
        onClick={onDismiss}
        className="ui dimmer modals visible active"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="ui standard modal visible active"
        >
          <div className="header">{title}</div>
          <div className="content">{content}</div>
          <div className="actions">
            {actionButtons}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
