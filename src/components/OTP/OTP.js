import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OTPcode from "./OTPcode";

const OTP = () => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);
  function handleChange(e) {
    setValue(e.target.value);
  }
  useEffect(() => {
    setDisable(value.length !== 11);
  }, [value]);
  return (
    <dialog id="otp" className="modal">
      <form method="dialog" className="modal-box rounded-none px-16 py-20">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className=" rounded-none flex flex-col items-center justify-center px-10 py-10 gap-5">
          <h3 className="font-bold text-sm">Continue using mobile number</h3>
          <h1 className="font-semibold">Mobile Number</h1>
          <div className="w-full text-white py-3 rounded-md border flex flex-row gap-2">
            <div className="flex flex-row items-center pl-3 gap-2">
              <img
                src="https://logos-download.com/wp-content/uploads/2021/07/Flag_of_Bangladesh.png"
                alt=""
                className="w-10 rounded"
              />
              <span className="text-black">+88</span>
            </div>
            <input
              error={disable}
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Ex: 01833952228"
              id=""
              className="outline-none text-black"
            />
          </div>
          <button
            className="w-full py-3 rounded-md border flex flex-row text-center justify-center font-semibold text-white bg-[#C71F66] disabled:bg-slate-300"
            disabled={disable}
            onClick={() => window.otpCode.showModal()}
          >
            CONTINUE            
          </button>
          <OTPcode/>
          <button className="text-blue-600 text-sm">
            Login with other options
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default OTP;
