import formStyle from "../../styles/FormStyle.module.css";

const NumberField = ({
  value,
  onChange,
  onBlur,
  error,
  label,
  name,
  hint,
  increment,
  decrement,
  containerClass,
  placeholder,
  type = "number",
  disabled,
  ...props
}) => {
  return (
    <div className={`field ${formStyle.Form_field}`}>
      <span className={formStyle.Field_labelWrapper}>
        <label htmlFor={name} className={formStyle.Field_label}>
          {label}
        </label>
      </span>
      <div
        className={`ant-input-number ant-input-number-borderless  ${formStyle.NumberInput_container} ${formStyle.TextInput_container}`}
      >
        {disabled && (
          <div className="ant-input-number-handler-wrap">
            <span
              unselectable="on"
              role="button"
              aria-label="Increase Value"
              aria-disabled="false"
              className="ant-input-number-handler ant-input-number-handler-up"
              onClick={() => increment()}
            >
              <span
                role="img"
                aria-label="up"
                className="anticon anticon-up ant-input-number-handler-up-inner"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="up"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                </svg>
              </span>
            </span>
            <span
              unselectable="on"
              role="button"
              aria-label="Decrease Value"
              aria-disabled="false"
              onClick={() => decrement()}
              className="ant-input-number-handler ant-input-number-handler-down"
            >
              <span
                role="img"
                aria-label="down"
                className="anticon anticon-down ant-input-number-handler-down-inner"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
              </span>
            </span>
          </div>
        )}
        <div className="ant-input-number-input-wrap">
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            {...props}
            className={formStyle.number_input}
            autoComplete="off"
            role="spinbutton"
            aria-valuenow="14"
            step="1"
          />
        </div>
      </div>

      <div
        className={`${formStyle.Error_container} ${
          error ? formStyle.Error_containerVisible : ""
        }`}
      >
        {error}
      </div>

      <div className={formStyle.Field_hint}>{hint}</div>
    </div>
  );
};

export { NumberField };
