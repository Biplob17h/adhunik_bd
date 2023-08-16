import React from 'react';
import './ServiceOption.scss'
import { Link } from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md'
const ServiceOption = () => {
    return (
        <div className="mt-16 2xl:max-w-[1100px] mx-auto flex flex-row items-center justify-between">
        <div className="dropdown py-5">
          <Link to='/allservices' className="m-1 text-sm text-[#615f5f] font-semibold">
            All Services
          </Link>        
        </div>        
        <div className="dropdown">
          <label tabIndex={0} className="m-1  flex gap-2 text-[#615f5f] font-semibold text-sm items-center">
            AC Repair Services
            <MdKeyboardArrowDown/>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-none w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="m-1  flex gap-2 text-[#615f5f] font-semibold text-sm items-center">
            Appliance Repair
            <MdKeyboardArrowDown/>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-none w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="m-1  flex gap-2 text-[#615f5f] font-semibold text-sm items-center">
            Click
            <MdKeyboardArrowDown/>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-none w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="m-1  flex gap-2 text-[#615f5f] font-semibold text-sm items-center">
            Click
            <MdKeyboardArrowDown/>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-none w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default ServiceOption;