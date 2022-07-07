import formStyle from "../../../styles/FormStyle.module.css";
import { NumberField } from "../../Input/NumberField";

const TransactionFee = ({ formik }) => {
  return (
    <div className={formStyle.fadeEnter}>
      <h2 className={formStyle.CreateCoinStep_heading}>
        Configure your Feature settings.
      </h2>
      <p className={formStyle.CreateCoinStep_text}>
        Here you can edit the details regarding your coins’ features.
      </p>
      <ul
        className={`${formStyle.Features_container} ${formStyle.CreateCoinStep_features}`}
      >
        <li className={formStyle.Features_option}>
          <div className={formStyle.Feature_container}>
            <img
              src="/svg/exchange.svg"
              alt="feature"
              className={formStyle.Feature_image}
            />
            <div className={formStyle.Feature_content}>
              <h3 className={formStyle.Feature_label}>Transaction Fee</h3>
              <p className={formStyle.Feature_hint}>
                Charge a fee for each transaction that takes place.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <form className={formStyle.CreateCoinStep_form}>
        <NumberField
          label="Tax Percentage"
          name="taxPercent"
          hint={
            "The percentage of fees you want to charge for each transfer transaction."
          }
          increment={() =>
            formik.setFieldValue("taxPercent", formik.values.taxPercent + 1)
          }
          decrement={() =>
            formik.setFieldValue("taxPercent", formik.values.taxPercent - 1)
          }
          placeholder="e.g. “TrustSwap”"
          {...formik.getFieldProps("taxPercent")}
          error={formik.touched.taxPercent && formik.errors.taxPercent}
        />
      </form>
    </div>
  );
};

export { TransactionFee };
