import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
const ServiceModal = () => {
  return (
    <dialog id="servicemodal" className="modal">
      <form
        method="dialog"
        className="modal-box flex flex-col w-full p-0 max-w-[1000px] h-[500px] items-start rounded-sm"
      >
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <span className="w-full py-3 text-center mx-auto shadow-md text-lg font-semibold">
          AC Servicing (For Multiple Split AC Unit)
        </span>
        <div className="flex flex-row items-start justify-start w-full">
          <div id="over" className="flex flex-col items-start justify-center w-2/3">
            <button className="flex items-center justify-between w-full py-4 px-2 bg-slate-300">
              <span className=" font-semibold flex items-center gap-2">
                <AiOutlineArrowLeft size={20} color="#C71F66" />
                Ac Basic Service (For Multiple Split AC)
              </span>
              <span className="font-semibold">6 option available</span>
            </button>
            <div className="pl-3 pt-3 flex flex-col items-start gap-2 w-full">
              <span className="text-lg">Select Your AC Unites -</span>
              <div className="flex flex-col items-start w-full gap-4">
                <div className="flex flex-row items-start justify-between pl-3 gap-4 pt-3">
                  <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/uploads/service/4031/options/1675228811_App_Thumb_480x480.jpg"
                    alt=""
                    className="max-w-[90px] w-full rounded-lg"
                  />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-semibold">2 AC Units (1-1.5 Ton)</span>
                    <ul>
                      <li className="text-xs font-semibold">This offer is applicable for single apartment.</li>
                      <li className="text-xs font-semibold">More AC you have, More discount you will get</li>
                    </ul>
                    <div>
                      <span className="text-green-800 font-semibold">৳ 1,200</span> / <span className="text-sm">unit</span>
                    </div>
                  </div>
                  <button className="border border-[#C71F66] hover:border-none hover:bg-[#C71F66] px-6 py-1 text-[#C71F66] rounded font-semibold hover:text-white">Add +</button>
                </div>
                <div className="flex flex-row items-start justify-between pl-3 gap-4 pt-3">
                  <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/uploads/service/4031/options/1675228811_App_Thumb_480x480.jpg"
                    alt=""
                    className="max-w-[90px] w-full rounded-lg"
                  />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-semibold">2 AC Units (1-1.5 Ton)</span>
                    <ul>
                      <li className="text-xs font-semibold">This offer is applicable for single apartment.</li>
                      <li className="text-xs font-semibold">More AC you have, More discount you will get</li>
                    </ul>
                    <div>
                      <span className="text-green-800 font-semibold">৳ 1,200</span> / <span className="text-sm">unit</span>
                    </div>
                  </div>
                  <button className="border border-[#C71F66] hover:border-none hover:bg-[#C71F66] px-6 py-1 text-[#C71F66] rounded font-semibold hover:text-white">Add +</button>
                </div>
                <div className="flex flex-row items-start justify-between pl-3 gap-4 pt-3">
                  <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/uploads/service/4031/options/1675228811_App_Thumb_480x480.jpg"
                    alt=""
                    className="max-w-[90px] w-full rounded-lg"
                  />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-semibold">2 AC Units (1-1.5 Ton)</span>
                    <ul>
                      <li className="text-xs font-semibold">This offer is applicable for single apartment.</li>
                      <li className="text-xs font-semibold">More AC you have, More discount you will get</li>
                    </ul>
                    <div>
                      <span className="text-green-800 font-semibold">৳ 1,200</span> / <span className="text-sm">unit</span>
                    </div>
                  </div>
                  <button className="border border-[#C71F66] hover:border-none hover:bg-[#C71F66] px-6 py-1 text-[#C71F66] rounded font-semibold hover:text-white">Add +</button>
                </div>
                <div className="flex flex-row items-start justify-between pl-3 gap-4 pt-3">
                  <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/uploads/service/4031/options/1675228811_App_Thumb_480x480.jpg"
                    alt=""
                    className="max-w-[90px] w-full rounded-lg"
                  />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-semibold">2 AC Units (1-1.5 Ton)</span>
                    <ul>
                      <li className="text-xs font-semibold">This offer is applicable for single apartment.</li>
                      <li className="text-xs font-semibold">More AC you have, More discount you will get</li>
                    </ul>
                    <div>
                      <span className="text-green-800 font-semibold">৳ 1,200</span> / <span className="text-sm">unit</span>
                    </div>
                  </div>
                  <button className="border border-[#C71F66] hover:border-none hover:bg-[#C71F66] px-6 py-1 text-[#C71F66] rounded font-semibold hover:text-white">Add +</button>
                </div>
                <div className="flex flex-row items-start justify-between pl-3 gap-4 pt-3">
                  <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/uploads/service/4031/options/1675228811_App_Thumb_480x480.jpg"
                    alt=""
                    className="max-w-[90px] w-full rounded-lg"
                  />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-semibold">2 AC Units (1-1.5 Ton)</span>
                    <ul>
                      <li className="text-xs font-semibold">This offer is applicable for single apartment.</li>
                      <li className="text-xs font-semibold">More AC you have, More discount you will get</li>
                    </ul>
                    <div>
                      <span className="text-green-800 font-semibold">৳ 1,200</span> / <span className="text-sm">unit</span>
                    </div>
                  </div>
                  <button className="border border-[#C71F66] hover:border-none hover:bg-[#C71F66] px-6 py-1 text-[#C71F66] rounded font-semibold hover:text-white">Add +</button>
                </div>
                <div className="flex flex-row items-start justify-between pl-3 gap-4 pt-3">
                  <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/uploads/service/4031/options/1675228811_App_Thumb_480x480.jpg"
                    alt=""
                    className="max-w-[90px] w-full rounded-lg"
                  />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-semibold">2 AC Units (1-1.5 Ton)</span>
                    <ul>
                      <li className="text-xs font-semibold">This offer is applicable for single apartment.</li>
                      <li className="text-xs font-semibold">More AC you have, More discount you will get</li>
                    </ul>
                    <div>
                      <span className="text-green-800 font-semibold">৳ 1,200</span> / <span className="text-sm">unit</span>
                    </div>
                  </div>
                  <button className="border border-[#C71F66] hover:border-none hover:bg-[#C71F66] px-6 py-1 text-[#C71F66] rounded font-semibold hover:text-white">Add +</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">right side</div>
        </div>
      </form>
    </dialog>
  );
};

export default ServiceModal;
