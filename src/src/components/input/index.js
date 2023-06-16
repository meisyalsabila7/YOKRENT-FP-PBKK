import React from "react";
const CustomInput = ({ type, name, placeholder, label, value, onchange, ref }) => {
  return (
    <div className="block py-2">
      <h3>{label}</h3>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className="border-gray-300 rounded border py-1 px-4 w-full"
        onChange={onchange}
        // value={value}
        value={value}
        ref={ref}
      />
    </div>
  );
};

export default CustomInput;
