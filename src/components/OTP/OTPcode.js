import React, { useEffect, useState } from "react";
const CodeInput = () => {
  const [userInput, setUserInput] = useState("");
  const codeChangeHandler = (event) => {
    const [, codeFieldIndex] = event.target.name.split("-");
    let fieldIntIndex = parseInt(codeFieldIndex, 10);
    setUserInput((prevState) => prevState + event.target.value);

    if (fieldIntIndex < 5) {
      const nextField = document.querySelector(
        `Input[name=code-${fieldIntIndex + 1}]`
      );
      nextField?.focus();
    } else {
      const field = document.querySelector(`Input[name=code-${fieldIntIndex}]`);
      field.blur();
    }
  };

  const codeInputFields = new Array(4)
    .fill(0)
    .map((item, index) => (
      <input
        name={`code-${index}`}
        key={index}
        className="w-16 h-16 border-black border-b-2 focus:outline-none text-2xl flex items-center text-center font-bold"
        onChange={(event) => codeChangeHandler(event)}
        maxLength={1}
      />
    ));

  return <>{codeInputFields}</>;
};

const OTPcode = () => {
  const userInput = CodeInput();
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setDisable(userInput.length !== 4);
  }, [userInput]);
  return (
    <dialog id="otpCode" className="modal">
      <form method="dialog" className="modal-box rounded-none px-16 py-20">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className=" rounded-none flex flex-col items-center justify-center px-10 py-10 gap-5">
          <h1 className="text-black text-center">
            Type the 4 digit code send to this number "+88{" "}
            <span className="font-semibold">01833952228</span>"
          </h1>
          <div className="flex flex-row items-center gap-2">
            <CodeInput />
          </div>
          <button
            className="w-full py-3 rounded-md border flex flex-row text-center justify-center font-semibold text-white bg-[#C71F66] disabled:bg-slate-300"
            error={disable}
            onClick={() => window.otpCode.showModal()}
          >
            CONTINUE
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default OTPcode;
