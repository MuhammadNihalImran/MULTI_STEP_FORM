import React, { useRef } from "react";

const Step2 = ({ email, setEmail, gender, setGender, prevStep, nextStep }) => {
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
        <h3 className="card-title">Step 2: Enter Email and Gender</h3>
        <input
          requied
          ref={inputRef}
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          required
          className="form-control mt-3"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="mt-3">
          <button className="btn btn-secondary me-2" onClick={prevStep}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
