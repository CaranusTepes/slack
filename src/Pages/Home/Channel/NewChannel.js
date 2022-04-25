import React from "react";
import "./modal.css";

function NewChannel({
  name,
  handleSubmit,
  handleNameInput,
  handleClick,
}) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="label-input-container">
          <label htmlFor="channel-name">Name: </label>
          <div className="input-container">
            <span className="input-icon"></span>
            <input
              className="newChannel-input"
              type="text"
              name="channel-name"
              id="channel-name"
              value={name}
              onChange={handleNameInput}
              placeholder="Avion School"
              required
            />
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-rectangle-large" onClick={handleClick}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewChannel;
