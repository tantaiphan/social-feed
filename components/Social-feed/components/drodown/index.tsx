import React, { useEffect, useState } from "react";

interface ComponentProps {
  options: any;
  onChane?: (val: any) => void;
}

export const Dropdown = ({ options, onChane }: ComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    // setSelectedOption(option);
    onChane?.(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={toggleDropdown}>
        {"Select data source"}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option: any, index: number) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
