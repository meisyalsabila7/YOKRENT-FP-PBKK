import React, { useRef, useState } from 'react';

const DatePicker = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="block py-2">
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={handleChange}
        ref={dateInputRef}
      />
    </div>
  );
};

export default DatePicker;