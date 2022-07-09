import formStyle from "../../../styles/FormStyle.module.css";
import { NumberField } from "../../Input/NumberField";
import { TextField } from "../../Input/TextField";

const Tokenomics = ({ formik }) => {
  return (
    <div className={formStyle.fadeEnter}>
      <h2 className={formStyle.CreateCoinStep_heading}>
        Let’s set up your Tokenomics.
      </h2>
      <p className={formStyle.CreateCoinStep_text}>
        Create the rules around supply and limits of your token.
      </p>
      <form className={formStyle.CreateCoinStep_form}>
        <NumberField
          label="Initial Supply *"
          name="initialSupply"
          hint={
            "Insert the initial of tokens available. Will be put in your account."
          }
          increment={() =>
            formik.setFieldValue(
              "initialSupply",
              formik.values.initialSupply + 1
            )
          }
          decrement={() =>
            formik.setFieldValue(
              "initialSupply",
              formik.values.initialSupply - 1
            )
          }
          placeholder="e.g. “TrustSwap”"
          {...formik.getFieldProps("initialSupply")}
          error={formik.touched.initialSupply && formik.errors.initialSupply}
        />
        <NumberField
          label="Maximum Supply *"
          name="maximumSupply"
          hint={"Insert the maximum number of tokens available."}
          placeholder="e.g. “TrustSwap”"
          {...formik.getFieldProps("maximumSupply")}
        />

        <TextField
          label="Supply Type"
          name="supplyType"
          disabled={true}
          hint={"Your Token Supply Type."}
          placeholder="Fixed"
          {...formik.getFieldProps("supplyType")}
        />
      </form>
    </div>
  );
};

export { Tokenomics };
