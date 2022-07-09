import formStyle from "../../../styles/FormStyle.module.css";

const Lockup = ({ formik }) => {
  return (
    <div className={formStyle.fadeEnter}>
      <h2 className={formStyle.CreateCoinStep_heading}>
        Configure your Feature settings.
      </h2>
      <p className={formStyle.CreateCoinStep_text}>
        Here you can edit the details regarding your coins' features.
      </p>
      <form className={formStyle.CreateCoinStep_form}>
        <label className={formStyle.FeatureList_wrapper}>
          <div
            className={formStyle.Feature_container}
            style={{ width: "100%" }}
          >
            <img src={"/svg/step5.svg"} className={formStyle.Feature_image} />
            <div
              className={formStyle.Feature_content}
              style={{ width: "100%" }}
            >
              <h3
                className={formStyle.Feature_label}
                style={{ justifyContent: "space-between", display: "flex" }}
              >
                <span>Lockup Amount</span>
                <span>{formik.values.lockupAmmount}</span>
              </h3>
              <input
                type="range"
                min={100}
                max={100000000}
                className={formStyle.range}
                {...formik.getFieldProps("lockupAmmount")}
              />
            </div>
          </div>
        </label>

        <div className={`field ${formStyle.Form_field}`}>
          <span className={formStyle.Field_labelWrapper}>
            <label htmlFor={"unlockTime"} className={formStyle.Field_label}>
              Choose Unlock Time
            </label>
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              type={"number"}
              id={"unlockTime"}
              name={"unlockTime"}
              {...formik.getFieldProps("unlockTime")}
              className={formStyle.TextInput_container}
            />
            <select
              id={"unlockTimePeriod"}
              name={"unlockTimePeriod"}
              {...formik.getFieldProps("unlockTime")}
              className={formStyle.TextInput_container}
            >
              <option value="Days">Days</option>
              <option value="Months">Months</option>
            </select>
          </div>

          <div
            className={`${formStyle.Error_container} ${
              formik.touched.unlockTime && formik.errors.unlockTime
                ? formStyle.Error_containerVisible
                : ""
            }`}
          >
            {formik.touched.unlockTime && formik.errors.unlockTime}
          </div>

          <div className={formStyle.Field_hint}>Unlock Date</div>
        </div>

        <table className={formStyle.lockTable}>
          <tbody>
            <tr>
              <td>Service Fee</td>
              <th>0% (No Fee)</th>
            </tr>
            <tr>
              <td>Total Lockup Amount</td>
              <th>{formik.values.lockupAmmount}</th>
            </tr>
            <tr>
              <td>Unlock Date</td>
              <th>02/13/2021, 12:00 PM GMT</th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Lockup;
