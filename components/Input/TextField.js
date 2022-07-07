import formStyle from "../../styles/FormStyle.module.css";

const TextField = ({
  value,
  onChange,
  onBlur,
  error,
  label,
  name,
  hint,
  containerClass,
  placeholder,
  type = "text",
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
        className={formStyle.TextInput_container}
      />
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

export { TextField };
