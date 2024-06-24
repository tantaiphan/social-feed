import React from "react";

const Input = ({
  value,
  onChange,
  placeholder,
  disabled,
  defaultValue,
}: {
  value?: string | undefined;
  onChange?: (val: string | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string | undefined,
}) => {
  return (
    <textarea
      value={value}
      onChange={(val) => {
        onChange?.(val.target?.value);
      }}
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={placeholder}
      style={{
        padding: "4px",
        borderRadius: "6px",
        fontSize: "11px",
        width: "100%",
        background: "rgb(243, 243, 242)",
      }}
    />
  );
};

export default Input;
