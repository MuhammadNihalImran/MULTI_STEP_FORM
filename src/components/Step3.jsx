import React, { useRef } from "react";

const Step3 = ({ question, setQuestion, prevStep, handleSubmit }) => {
  let inputRef = useRef(null);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleClick = () => {
    handleFocus();
    handleSubmit();
  };
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Step 3: Additional Question</h3>
        <input
          required
          ref={inputRef}
          type="text"
          className="form-control"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="mt-3">
          <button className="btn btn-secondary me-2" onClick={prevStep}>
            Previous
          </button>
          <button className="btn btn-success" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
