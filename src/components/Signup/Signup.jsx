import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/UserContext";
import { MainApiLink } from "../../App";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { setRefresh, refresh } = useContext(AuthContext);

  const handleSignUpSubmit = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;

    const user = {
      name: form.name.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    // Main api link at App.jsx
    fetch(`${MainApiLink}/api/v1/auth/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          toast.success("User signed up successfully please login to continue");
          form.reset();
          navigate("/login");
          setRefresh(refresh + 1);
        } else {
          setError(data?.message);
        }
      });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-5">
      <h1 className="text-[2rem] font-bold text-[#1f3e72]">Sign up</h1>
      <div className="w-[25rem] border flex flex-col gap-y-3 p-10 bg-[#eeeeff]">
        <div className="w-full flex flex-col gap-y-1">
          <span className="text-[.9rem]">Name <span className="text-red-500">*</span></span>
          <input type="text" name="" id="" className="border w-full h-[2.3rem] rounded border-blue-400 px-2" />
        </div>
        <div>
          <span className="text-[.9rem]">Name <span className="text-red-500">*</span></span>
          <input type="text" name="" id="" className="border w-full h-[2.3rem] rounded border-blue-400 px-2" />
        </div>
        <div>
          <span className="text-[.9rem]">Name <span className="text-red-500">*</span></span>
          <input type="text" name="" id="" className="border w-full h-[2.3rem] rounded border-blue-400 px-2" />
        </div>
      </div>
      <div>
        <button className="button">Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
