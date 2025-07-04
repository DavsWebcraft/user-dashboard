import { useState } from "react";
import StepEmailPassword from "./StepEmailPassword";
import StepPersonalInfo from "./StepPersonalInfo";
import AddAddress from "./AddAddress";
import AddAddress2 from "./AddAddress2";
import SignupSuccess from "./SignupSuccess";

export default function SignupWizard() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  return (
    <>
      {step === 1 && <StepEmailPassword onNext={next} />}
      {step === 2 && <StepPersonalInfo onNext={next} onBack={prev} />}
      {step === 3 && <AddAddress onNext={next} onBack={prev} />}
      {step === 4 && <AddAddress2 onNext={next} onBack={prev} />}
      {step === 5 && <SignupSuccess />}
    </>
  );
}
