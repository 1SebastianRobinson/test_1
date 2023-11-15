import React from "react";
import { UserCircle } from "@heroicons/react";

export default function header() {
  const currentpath = window.location.pathname;
  return (
    <div className="header bg-transparent">
      <div className="flex items-center w-full">
        <a href="/">
          <div
            className={`logo ${
              currentpath !== "/" ? "text-black" : "text-white"
            } `}
          >
            <div className="icon bg-yellow-500 after:bg-yellow-500 before:bg-yellow-500"></div>{" "}
            &nbsp;BTCBUSD
          </div>
        </a>

        {/* <ul className="flex items-center w-full">
          <li className="list-none px-4">
            <a
              href="#"
              className={`text-sm font-medium hover:text-yellow-400 ${
                currentpath !== "/" ? "text-black" : "text-white"
              }`}
            >
              Buy Crypto
            </a>
          </li>
          <li className="list-none px-4">
            <a
              href="#"
              className={`text-sm font-medium hover:text-yellow-400 ${
                currentpath !== "/" ? "text-black" : "text-white"
              }`}
            >
              Markets
            </a>
          </li>
          <li className="list-none px-4">
            <a
              href="#"
              className={`text-sm font-medium hover:text-yellow-400 ${
                currentpath !== "/" ? "text-black" : "text-white"
              }`}
            >
              Trade
            </a>
          </li>
          <li className="list-none px-4">
            <a
              href="#"
              className={`text-sm font-medium hover:text-yellow-400 ${
                currentpath !== "/" ? "text-black" : "text-white"
              }`}
            >
              About us
            </a>
          </li>
        </ul> */}
      </div>
      {/* <div className="flex items-center">
        <button
          type="button"
          className="text-white flex items-center bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2 text-center mr-2 mb-2 "
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
          Register
        </button>
      </div> */}
    </div>
  );
}
