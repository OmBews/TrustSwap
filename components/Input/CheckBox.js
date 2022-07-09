import formStyle from "../../styles/FormStyle.module.css";

const CheckBox = ({ value, label, name, hint, img, ...props }) => {
  return (
    <li
      className={`${formStyle.FeatureList_option} ${
        value ? formStyle.FeatureList_optionSelected : ""
      }`}
      {...props}
    >
      <label className={formStyle.FeatureList_wrapper}>
        <div className={formStyle.Feature_container}>
          <img src={img} className={formStyle.Feature_image} />
          <div className={formStyle.Feature_content}>
            <h3 className={formStyle.Feature_label}>{label}</h3>
            <p className={formStyle.Feature_hint}>{hint}</p>
          </div>
        </div>
        <span className={formStyle.FeatureList_checkbox}>
          {/* <input
            type="checkbox"
            name={name}
            className={formStyle.FeatureList_input}
            value={value}
            {...props}
          /> */}
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.77839 1.19112L4.14351 5.46671C4.08048 5.52532 4.00535 5.56486 3.92871 5.59835C3.89291 5.66859 3.85005 5.73743 3.78651 5.79557C3.49204 6.06814 3.01303 6.06814 2.71704 5.79557L0.221609 3.49358C-0.0738697 3.221 -0.0738697 2.77912 0.221609 2.50654C0.516584 2.23397 0.995602 2.23397 1.29108 2.50654L3.25203 4.31595L7.70892 0.204082C8.0044 -0.0680272 8.48342 -0.0680272 8.77839 0.204082C9.07387 0.476656 9.07387 0.918542 8.77839 1.19112V1.19112Z"
              fill="#D7DADB"
            ></path>
          </svg>
        </span>
      </label>
    </li>
  );
};

export { CheckBox };
