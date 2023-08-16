import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <dialog id="register" className="modal">
      <form method="dialog" className="modal-box rounded-none px-16 py-20">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className=" rounded-none flex flex-col items-center justify-center px-10 py-10 gap-5">
          <h3 className="font-bold text-sm">Register With</h3>
          <button className="w-full text-white py-3 rounded-md bg-black">
            Mobile Number
          </button>
          <div className="flex flex-row items-center justify-between w-full gap-4">
            <Link className="border border-slate-300 hover:bg-slate-100 px-5 py-3 w-full text-center rounded-md">
              <p className="text-sm text-slate-300 font-semibold">FACEBOOK</p>
            </Link>
            <Link className="w-full border border-slate-300 hover:bg-slate-100 px-5 py-3 text-center rounded-md">
              <p className="text-sm text-slate-300 font-semibold">GOOGLE</p>
            </Link>
          </div>          
        </div>
        <div className='text-center mb-5'>
        <p className='text-sm'>By signing in I agree to the <Link className='text-blue-600'>Terms & Condition</Link></p>
        </div>
        <div className="flex flex-row items-center justify-start">
          <p className="text-sm">Already have an account in Sheba.xyz?</p>
          <button
              className="px-3 py-1 rounded-md border ml-2 border-black text-sm"
              onClick={() => window.login.showModal()}
            >
              Login Now
            </button>
        </div>
      </form>
    </dialog>
    );
};

export default Register;