import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import SummaryPopup from "./components/SummaryPopup";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    question: "",
  });
  const [showSummary, setShowSummary] = useState(false);

  const { name, email, gender, question } = formData;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleSubmit = () => setShowSummary(true);
  const handleClose = () => setShowSummary(false);

  const isStep1Valid = () => name.trim() !== "";
  const isStep2Valid = () => email.trim() !== "" && gender.trim() !== "";
  const isStep3Valid = () => question.trim() !== "";

  return (
    <div className="container mt-5">
      {step === 1 && (
        <Step1
          name={name}
          setName={(name) => setFormData({ ...formData, name })}
          nextStep={isStep1Valid() ? nextStep : null}
        />
      )}
      {step === 2 && (
        <Step2
          email={email}
          setEmail={(email) => setFormData({ ...formData, email })}
          gender={gender}
          setGender={(gender) => setFormData({ ...formData, gender })}
          prevStep={prevStep}
          nextStep={isStep2Valid() ? nextStep : null}
        />
      )}
      {step === 3 && (
        <Step3
          question={question}
          setQuestion={(question) => setFormData({ ...formData, question })}
          prevStep={prevStep}
          handleSubmit={isStep3Valid() ? handleSubmit : null}
        />
      )}
      <SummaryPopup
        show={showSummary}
        handleClose={handleClose}
        formData={formData}
      />
    </div>
  );
};

export default App;
