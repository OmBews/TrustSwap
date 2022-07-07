import formStyle from "../../../styles/FormStyle.module.css";
import { CheckBox } from "../../Input/CheckBox";

const AddFeatucres = ({ formik }) => {
  return (
    <div className={formStyle.fadeEnter}>
      <h2 className={formStyle.CreateCoinStep_heading}>
        Select features for your coin.
      </h2>
      <p className={formStyle.CreateCoinStep_text}>
        Choose the additional functionality you want added to your smart
        contract code.
      </p>
      <form className={formStyle.CreateCoinStep_form}>
        <ul className={formStyle.FeatureList_list}>
          <CheckBox
            img="/svg/exchange.svg"
            label={"Transaction Fee"}
            name="hasTransactionFee"
            hint="Charge a fee for each transaction that takes place."
            onClick={() => {
              formik.setFieldValue(
                "hasTransactionFee",
                !formik.values.hasTransactionFee
              );
              formik.setFieldValue("hasMintFunction", false);
              formik.setFieldValue("hasBurnFunction", false);
            }}
            value={formik.values.hasTransactionFee}
          />
          <CheckBox
            img="/svg/robot.svg"
            label={"Mint Function"}
            name="hasMintFunction"
            hint="Add the ability to mint additional tokens."
            value={formik.values.hasMintFunction}
            onClick={() => {
              formik.setFieldValue("hasTransactionFee", false);
              formik.setFieldValue(
                "hasMintFunction",
                !formik.values.hasMintFunction
              );
            }}
          />
          <CheckBox
            img="/svg/fire.svg"
            label={"Burn Function"}
            name="hasBurnFunction"
            hint="Add the ability to burn your tokens. This is great for creating deflation."
            value={formik.values.hasBurnFunction}
            onClick={() => {
              formik.setFieldValue("hasTransactionFee", false);
              formik.setFieldValue(
                "hasBurnFunction",
                !formik.values.hasBurnFunction
              );
            }}
          />
        </ul>
        <div className={formStyle.CreateCoinStep_disclaimer}>
          Please note, to ensure healthy tokenomics not all combinations are
          allowed.
        </div>
      </form>
    </div>
  );
};

export { AddFeatucres };
