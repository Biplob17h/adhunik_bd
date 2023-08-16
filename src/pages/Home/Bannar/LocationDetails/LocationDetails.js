import React from "react";

const LocationDetails = () => {
  return (      
      <dialog id="location" className="modal">
        <form method="dialog" className="modal-box flex flex-col items-center justify-center">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="text-center text-lg font-semibold w-full py-3 bg-slate-400">
            <span>Select Your Country</span>
          </div>                                  
        </form>
      </dialog>
  );
};

export default LocationDetails;
