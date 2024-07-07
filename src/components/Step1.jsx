import React, { useRef } from "react";

const Step1 = ({ name, setName, nextStep }) => {
  let inputRef = useRef(null);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleClick = () => {
    handleFocus();
    nextStep();
  };
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Step 1: Enter Name</h3>
        <input
          required
          type="text"
          ref={inputRef}
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary mt-3" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
