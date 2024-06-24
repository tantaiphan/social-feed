import React, { CSSProperties } from "react";

const InputNumber = ({
  value,
  onChange,
  onBlur,
  placeholder,
  disabled,
  defaultValue,
  classname,
  max,
  min,
  style,
}: {
  value?: string | number | undefined;
  onChange?: (val: string | number | undefined) => void;
  onBlur?: (val: string | number | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string | undefined;
  classname?: string;
  max?: number;
  min?: number;
  style?: CSSProperties;
}) => {
  const onChangeInput = (val: string | number | undefined) => {
    if (val === undefined) {
      onChange?.('');
      return;
    }

    const num = Number(val);

    const minValue = min ?? 1;

    if (max && num >= minValue && num <= max) {
      onChange?.(num);
      return;
    }

    if (max === undefined && num >= minValue) {
      onChange?.(num);
      return;
    }

    if (max !== undefined && num > max) {
      onChange?.(max);
      return;
    }

    onChange?.("");
  };

  const onBlurInput = (val: string | number | undefined) => {
    if (val === undefined) {
      return;
    }

    const num = Number(val);

    const minValue = min ?? 0;

    if (max && num >= minValue && num <= max) {
      onBlur?.(num);
      return;
    }
    if (max === undefined && num >= minValue) {
      onBlur?.(num);
      return;
    }
    onBlur?.(1);
  };

  return (
    <input
      type="number"
      value={value}
      onChange={(val) => {
        onChangeInput(val.target?.value);
      }}
      onBlur={(val) => {
        onBlurInput(val.target?.value);
      }}
      className={classname}
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={placeholder}
      style={{
        padding: "4px",
        borderRadius: "6px",
        fontSize: "11px",
        background: "rgb(243, 243, 242)",
        ...style,
      }}
    />
  );
};

export default InputNumber;
