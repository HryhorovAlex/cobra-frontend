import React from "react";
import "./Checkbox.styles.scss";

export interface CheckboxProps {
  value: boolean;
  onChange?: any;
  // onChange?: () => void;
  variant?: "mark-square" | "mark-circle" | "dot";
  size?: "small" | "normal";
  label?: string;
  labelPosition?: "right" | "left";
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onChange = () => {},
  variant = "mark-square",
  size = "normal",
  labelPosition = "right",
  label,
  className,
  ...props
}) => {
  return (
    <label
      className={`checkbox ${
        labelPosition === "left" ? "flex-rowr-fc-fc" : "flex-row-fs-fc"
      } ${className}`}
    >
      <div className={`checkbox-wrapper checkbox-wrapper-${size}`}>
        <input
          onChange={onChange}
          checked={value}
          type="checkbox"
          id="check"
          hidden
          {...props}
        />
        <label className={`checkmark checkmark-${variant}`} htmlFor="check" />
      </div>
      <span className={`checkbox__label checkbox__label--${labelPosition}`}>
        {label}
      </span>
    </label>
  );
};
