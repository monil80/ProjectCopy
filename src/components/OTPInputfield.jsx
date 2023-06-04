import React from "react";

const OTPInputField = React.forwardRef(({ value, onChange }, ref) => {
  
  return (
    <div className="input-container">
      <input
      ref={ref}
        maxLength={1}
        className="w-[40px] h-[40px] rounded-[5px] border-2 border-solid border-[#B8B8B8] bg-[#F5F5F5] text-center my-1 focus:outline-none"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (!/^[0-9]+$/.test(e.key) && e.key !== "Backspace") {
            e.preventDefault();
          }
        }
      }
      />
    </div>
  );
});

export default OTPInputField;
