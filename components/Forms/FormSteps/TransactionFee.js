import formStyle from "../../../styles/FormStyle.module.css";
// import { BasicDatePicker } from "../../Input/DatePicker";
import { NumberField } from "../../Input/NumberField";
import { TextField } from "../../Input/TextField";

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
        className={`${formStyle.Features_container} ${formStyle.CreateCoinStep_features} li-mt`}
      >
        {formik.values.hasTransactionFee && (
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
        )}
        {formik.values.hasMintFunction && (
          <li className={formStyle.Features_option}>
            <div className={formStyle.Feature_container}>
              <img
                src="/svg/robot.svg"
                alt="feature"
                className={formStyle.Feature_image}
              />
              <div className={formStyle.Feature_content}>
                <h3 className={formStyle.Feature_label}>Mint Function</h3>
                <p className={formStyle.Feature_hint}>
                  Add the ability to mint additional tokens. Who controls this
                  mint ability can be modified and locked in later
                </p>
              </div>
            </div>
          </li>
        )}
        {formik.values.hasBurnFunction && (
          <li className={formStyle.Features_option}>
            <div className={formStyle.Feature_container}>
              <img
                src="/svg/fire.svg"
                alt="feature"
                className={formStyle.Feature_image}
              />
              <div className={formStyle.Feature_content}>
                <h3 className={formStyle.Feature_label}>Burn Function</h3>
                <p className={formStyle.Feature_hint}>
                  Add the ability to burn your tokens. this is great for
                  creating deflation.
                </p>
              </div>
            </div>
          </li>
        )}
      </ul>
      <form className={formStyle.CreateCoinStep_form}>
        <NumberField
          placeholder={"Soft Cap/Goal"}
          hint={
            "Pre-Sale goal in ETH. if the goal is reached within the ICO time span, the ICO is considered successfull. Otherwise, the funds will be returned to the investors."
          }
          {...formik.getFieldProps("softCap")}
          error={formik.touched.softCap && formik.errors.softCap}
        />
        <NumberField
          placeholder={"Hard Cap"}
          hint={
            "Pre-Sale cap in ETH. If the cap is reached, the ICO gets immediately finalized."
          }
          {...formik.getFieldProps("hardCap")}
          error={formik.touched.hardCap && formik.errors.hardCap}
        />
        <TextField
          placeholder={"Wallet to Receive Funds"}
          hint={"The account where investor funds will be stored."}
          {...formik.getFieldProps("walletToReceiveFunds")}
          error={
            formik.touched.walletToReceiveFunds &&
            formik.errors.walletToReceiveFunds
          }
        />
        <div className={formStyle.dateRange_container}>
          <TextField
            type="date"
            placeholder={"Wallet to Receive Funds"}
            hint={"Monday,Februrary 13,2021"}
            {...formik.getFieldProps("preSaleOpening")}
            error={
              formik.touched.preSaleOpening && formik.errors.preSaleOpening
            }
          />
          <TextField
            type="date"
            placeholder={"Wallet to Receive Funds"}
            hint={"Monday,Februrary 23,2021"}
            {...formik.getFieldProps("preSaleClosing")}
            error={
              formik.touched.preSaleClosing && formik.errors.preSaleClosing
            }
          />
        </div>
        {/* <BasicDatePicker
          name={"preSaleDate"}
          error={formik.touched.taxPercent && formik.errors.taxPercent}
          label="Pre-sale Opening Time"
          formik={formik}
        /> */}
      </form>
    </div>
  );
};

export { TransactionFee };
