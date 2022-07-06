import { useState } from "react";
import formStyle from "../../styles/FormStyle.module.css";

import * as Yup from "yup";
import { useFormik } from "formik";

import { AddFeatucres } from "./FormSteps/AddFeatures";
import { BasicInfo } from "./FormSteps/BasicInfo";
import { Tokenomics } from "./FormSteps/Tokenomics";
import { TransactionFee } from "./FormSteps/TransactionFee";

const initialValues = {
  userName: "",
  firstname: "",
  lastname: "",
  country: "",
  email: "",
};

function _renderStepContent(step, formik) {
  switch (step) {
    case 0:
      return <BasicInfo />;
    case 1:
      return <Tokenomics />;
    case 2:
      return <AddFeatucres />;
    case 3:
      return <TransactionFee />;
    default:
      return <div>Not Found</div>;
  }
}

const steps = ["Basic Information", "Tokenomics", "Add features", ""];

const CreateTokenForm = () => {
  const [activeStep, setStep] = useState(0);

  const validationSchema = Yup.object({
    userName: Yup.string().required("Username is required"),
    firstname: Yup.string().required("first name is required"),
    lastname: Yup.string().required("last name is required"),
    country: Yup.string().required("country is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className={formStyle.formContainer}>
      <ul className={formStyle.CreateCoinNav_container}>
        {steps.map((stp, index) => (
          <li
            key={stp + "step key"}
            className={`${formStyle.CreateCoinNav_step} ${
              index < activeStep && formStyle.CreateCoinNav_stepChecked
            } ${index == activeStep && formStyle.CreateCoinNav_stepActive}`}
          >
            <div className={formStyle.CreateCoinNav_stepIcon}>
              <img
                src={`/svg/step${index + 1}.svg`}
                className={index != 0 ? formStyle.stepimg : ""}
              />
            </div>
            <div className={formStyle.CreateCoinNav_stepContent}>
              <div className={formStyle.CreateCoinNav_stepNumber}>
                Step {index + 1}/{steps.length}
              </div>
              <div className={formStyle.CreateCoinNav_stepTitle}>{stp}</div>
            </div>
          </li>
        ))}
      </ul>
      <div
        className={`${formStyle.CreateCoinStep_container} ${formStyle.CreateCoinForm_step}`}
      >
        {_renderStepContent(activeStep, formik)}

        <div className={formStyle.CreateCoinStep_actions}>
          {activeStep != 0 && (
            <button
              onClick={() => setStep((current) => current - 1)}
              className={`${formStyle.Button_button} ${formStyle.CreateCoinStep_buttonPrev} ${formStyle.Button_buttonPrimary} ${formStyle.Button_buttonGray} ${formStyle.Button_buttonOutline}`}
            >
              <span
                className={`${formStyle.Button_icon} ${formStyle.Button_iconAlignStart}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                >
                  <path
                    fill="#2C2C38"
                    fillRule="evenodd"
                    d="M22.025 11.883H7.005l4.779 4.768c.771.772.771 2.023 0 2.794-.774.771-2.027.771-2.798 0L.898 11.376c-.026-.024-.06-.032-.085-.057-.025-.025-.033-.059-.057-.086l-.169-.169c-.773-.771-.773-2.022 0-2.793.311-.31.705-.461 1.109-.522L8.894.565c.745-.742 1.952-.742 2.694 0 .744.742.744 1.946 0 2.689L6.9 7.932h15.125c1.091 0 1.975.884 1.975 1.975 0 1.091-.884 1.976-1.975 1.976z"
                  ></path>
                </svg>
              </span>
              <span>Back</span>
            </button>
          )}
          <button
            onClick={() => setStep((current) => current + 1)}
            className={`${formStyle.Button_button} ${formStyle.Button_buttonPrimary} ${formStyle.Button_buttonGreen}`}
          >
            <span>Continue</span>
            <span className={formStyle.Button_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
              >
                <path
                  fill="#2C2C38"
                  fillRule="evenodd"
                  d="M23.412 12.657c-.31.314-.704.467-1.108.528l-7.198 7.274c-.746.752-1.95.752-2.695 0-.744-.752-.744-1.97 0-2.722L17.098 13H2c-1.105 0-2-.895-2-2s.895-2 2-2h14.994l-4.778-4.828c-.772-.782-.772-2.048 0-2.829.771-.781 2.025-.781 2.799 0l8.082 8.167c.028.025.063.034.09.061.027.026.035.062.06.09l.165.168c.773.78.773 2.047 0 2.828z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateTokenForm };
