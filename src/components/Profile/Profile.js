import React from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
const Profile = () => {
  return (
    <div className="2xl:max-w-[1100px] mx-auto mt-28">
      <div className="flex flex-row items-center gap-2">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link className="font-semibold">Profile</Link>
      </div>
      <div className="flex flex-row items-start mt-5">
        <div className="flex flex-col items-start w-1/5 sticky top-16">
          <a
            className="w-full hover:bg-slate-200 py-3 pl-4 text-lg font-semibold"
            href=""
          >
            My Account
          </a>
          <a
            className="w-full hover:bg-slate-200 py-3 pl-4 text-lg font-semibold"
            href=""
          >
            My Addresses
          </a>
          <a
            className="w-full hover:bg-slate-200 py-3 pl-4 text-lg font-semibold"
            href=""
          >
            My Offers
          </a>
          <a
            className="w-full hover:bg-slate-200 py-3 pl-4 text-lg font-semibold"
            href=""
          >
            My Promotions
          </a>
          <a
            className="w-full hover:bg-slate-200 py-3 pl-4 text-lg font-semibold"
            href=""
          >
            Free Services
          </a>
          <a
            className="w-full hover:bg-slate-200 py-3 pl-4 text-lg font-semibold"
            href=""
          >
            Sheba Credit
          </a>
        </div>
        <div className="flex flex-col items-center gap-6 border-l w-4/5">
          <span className="text-2xl font-semibold">Personal Info</span>
          {/* profile img */}
          <div className="avatar">
            <div className="w-48 bg-black rounded-full"></div>

            <button className="absolute bottom-1 right-1 z-50 p-2 bg-white rounded-full shadow-xl">
              <MdEdit size={35} />
            </button>
          </div>
          {/* user info */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-row items-center justify-start border-b pr-10 pb-4">
              <span className="font-semibold pr-16">Name</span>
              <input
                type="text"
                readOnly
                disabled
                placeholder="Leon Ali"
                className="font-semibold pr-24 bg-white"
              />
            </div>
            <div className="flex flex-row items-center justify-start border-b pr-10 pb-4">
              <span className="font-semibold pr-16">Phone</span>
              <input
                type="text"
                readOnly
                disabled
                placeholder="+8801833952228"
                className="font-semibold pr-24 bg-white"
              />
            </div>
            <div className="flex flex-row items-center justify-start border-b pr-10 pb-4">
              <span className="font-semibold pr-16">Email</span>
              <input
                type="text"
                readOnly
                disabled
                placeholder="N/A"
                className="font-semibold pr-24 bg-white"
              />
            </div>
            <div className="flex flex-row items-center justify-start border-b pr-10 pb-4">
              <span className="font-semibold pr-5">Date of birth</span>
              <input
                type="text"
                readOnly
                disabled
                placeholder="N/A"
                className="font-semibold pr-24 bg-white"
              />
            </div>
            <div className="flex flex-row items-center justify-start border-b pr-10 pb-4">
              <span className="font-semibold pr-16">Gender</span>
              <input
                type="text"
                readOnly
                disabled
                placeholder="N/A"
                className="font-semibold pr-24 bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
