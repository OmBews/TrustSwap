import formStyle from "../../../styles/FormStyle.module.css";
import { NumberField } from "../../Input/NumberField";
import { TextField } from "../../Input/TextField";

const BasicInfo = ({ formik }) => {
  return (
    <div className={formStyle.fadeEnter}>
      <h2 className={formStyle.CreateCoinStep_heading}>
        Basic token information.
      </h2>
      <p className={formStyle.CreateCoinStep_text}>
        Tell us the basics about the token you are building.
      </p>
      <form className={formStyle.CreateCoinStep_form}>
        <div className={`field ${formStyle.Form_field}`}>
          <span className={formStyle.Field_labelWrapper}>
            <label htmlFor="blockchain" className={formStyle.Field_label}>
              Blockchain
            </label>
          </span>
          <span
            className={`${formStyle.TextInput_container} ${formStyle.TextInput_notAllowed}`}
          >
            <span className={formStyle.input_prefix}>
              <img
                src="/images/polygon.png"
                className={formStyle.CreateCoinStep_blockchainIcon}
                alt=""
              />
            </span>
            <input
              id="blockchain"
              disabled
              type="text"
              defaultValue="Polygon - Testnet"
            />
            <span>
              <button
                className={`"${formStyle.button} ${formStyle.CreateCoinStep_changeNetworkButton}`}
              >
                <span>Change Network</span>
              </button>
            </span>
          </span>
          <div className={formStyle.Field_hint}>
            Current Metamask network connected
          </div>
        </div>

        <TextField
          label="Token Name"
          name="tokenName"
          hint={"Choose a name for your token"}
          placeholder="e.g. “TrustSwap”"
          {...formik.getFieldProps("tokenName")}
          error={formik.touched.tokenName && formik.errors.tokenName}
        />

        <TextField
          label="Symbol"
          name="symbol"
          hint={"Choose symbol for your token"}
          placeholder="e.g. “SWAP”"
          {...formik.getFieldProps("symbol")}
          error={formik.touched.symbol && formik.errors.symbol}
        />

        {/* image dropzone */}

        <NumberField
          label="Decimals"
          name="decimals"
          hint={"Insert the decimal precision of your token"}
          placeholder="8-18"
          increment={() =>
            formik.setFieldValue("decimals", formik.values.decimals + 1)
          }
          decrement={() =>
            formik.setFieldValue("decimals", formik.values.decimals - 1)
          }
          {...formik.getFieldProps("decimals")}
          error={formik.touched.decimals && formik.errors.decimals}
        />

        <TextField
          label="Description"
          name="description"
          hint={"Add description for your token"}
          placeholder="A DeFi Yield Farming Token"
          {...formik.getFieldProps("description")}
          error={formik.touched.description && formik.errors.description}
        />
        <TextField
          label="Website (Optional)"
          name="website"
          hint={"Add website url for your token"}
          placeholder="https://www.trustswap.org/"
          {...formik.getFieldProps("website")}
          error={formik.touched.website && formik.errors.website}
        />
        <TextField
          label="Twitter (Optional)"
          name="twitter"
          hint={"Add twitter page url for your token"}
          placeholder="https://twitter.com/trustswap?lang=en"
          {...formik.getFieldProps("twitter")}
          error={formik.touched.twitter && formik.errors.twitter}
        />
        <TextField
          label="Telegram (Optional)"
          name="telegram"
          hint={"Add telegram group url for your token"}
          placeholder="https://t.me/TrustSwap"
          {...formik.getFieldProps("telegram")}
          error={formik.touched.telegram && formik.errors.telegram}
        />
      </form>
    </div>
  );
};

export { BasicInfo };
