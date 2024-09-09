import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ServiceSingle.css";

const ServiceSingle = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="xl:max-w-[1200px] mx-auto flex flex-col pt-10 h-full">
      <h1 className="text-center text-[2rem] font-bold text-[#1f3e72]">
        Make an <span className="text-orange-500">appointment</span>
      </h1>
      <p className="text-center text-zinc-500 font-medium">
        We Will Contact With You Soon
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between mt-10 gap-5">
        <div className="flex flex-col gap-y-8 w-full px-3">
          <div className="w-full flex gap-x-3">
            <span className="">Select a service :</span>
            <select
              name=""
              id=""
              className=" border border-zinc-400 rounded pl-1 w-[300px]"
            >
              <option value="ac">Ac</option>
              <option value="ac">Ac</option>
              <option value="ac">Ac</option>
            </select>
          </div>
          <div className="react-calendar">
            <Calendar onChange={setDate} value={date} minDate={new Date()} />
          </div>
        </div>
        <div className="w-full flex flex-col p-5 gap-y-5">
          {/* location */}
          <p className="text-center text-[1.1rem] font-medium text-zinc-500">
            Location
          </p>
          <div className="flex flex-col gap-y-5">
            <div>
              <span>Area</span>
              <input
                type="text"
                name=""
                id=""
                className="w-full border h-[2.5rem] rounded px-3 outline-none"
              />
            </div>
            <div>
              <span>Road number</span>
              <input
                type="text"
                name=""
                id=""
                className="w-full border h-[2.5rem] rounded px-3 outline-none"
              />
            </div>
            <div>
              <span>House number</span>
              <input
                type="text"
                name=""
                id=""
                className="w-full border h-[2.5rem] rounded px-3 outline-none"
              />
            </div>
            <div>
              <span>Phone</span>
              <input
                type="number"
                name=""
                id=""
                className="w-full border h-[2.5rem] rounded px-3 outline-none"
              />
            </div>
            <div>
              <span>Email</span>
              <input
                type="email"
                name=""
                id=""
                className="w-full border h-[2.5rem] rounded px-3 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <button className="button">Book now</button>
      </div>
      <div className="flex md:flex-row flex-col my-20 gap-20">
        <div className="flex md:flex-row flex-col gap-10 w-full items-center justify-center px-5">
          <img
            src="https://i.postimg.cc/GmbNMXMX/cleaning-mop.png"
            alt=""
            className="md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem]"
          />
          <div className="w-full flex flex-col gap-5">
            <h1 className="md:text-[2rem] text-[1.5rem] font-bold text-[#1f3e72] text-center">
              AC Jet wash
            </h1>

            <p className="text-zinc-500 md:text-sm text-xs font-medium">
              AC Jet Wash offers detailed cleaning of the indoor and outdoor
              units with Jet Wash Machine including minor problem-fixing
              (excluding materials and parts). The service charge varies on your
              AC amount, height, weight, and difficulties.
            </p>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col px-5 gap-y-5">
          <div className="w-full flex flex-col gap-y-3 pl-5">
            <span className="text-[1.3rem] font-bold text-orange-500">
              Features
            </span>
            <ul className="flex flex-col text-zinc-600 gap-y-1">
              <li className="list-disc">Professional Technician</li>
              <li className="list-disc">Doorstep service</li>
              <li className="list-disc">Safety Assurance</li>
              <li className="list-disc">15 Days Service Warranty</li>
              <li className="list-disc">Proper Diagnosis</li>
              <li className="list-disc">Complete Repairing</li>
              <li className="list-disc">Night Shift Service</li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-y-3 pl-5">
            <span className="text-[1.3rem] font-bold text-orange-500">
              Excluded
            </span>
            <ul className="flex flex-col text-zinc-600 gap-y-1">
              <li className="list-disc">
                Component/Material or Parts (if used) i.e. Angle – 1500 tk for
                AC outdoor unit
              </li>
              <li className="list-disc">
                Transportation cost (if applicable).
              </li>
              <li className="list-disc">Hanging Charge 300tk (If applicate)</li>
              <li className="list-disc">Air conditioner drainage system.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
