import React, { useState, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Fifth() {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="forth"
              className="flex-col text-black border-2 border-gray-500 rounded-full p-1 focus:ring-4 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </a>
            {/* <h1 className="flex-col text-xl font-bold text-lightblack ml-2">
              Diposite
            </h1> */}
          </div>
          {/* <a
            href="#"
            className=" text-blue-800 font-medium underline hover:text-blue-600"
          >
            How to deposite?
          </a> */}
        </div>

        <div className="flex justify-center">
          <div className="p-24 w-full border-2 border-gray-400 rounded-md mt-4">
            <div className="flex justify-center">
              <div className="w-[70px] h-[70px] rounded-full border-4 border-green-600 flex justify-center items-center">
                <CheckIcon className=" text-green-600 w-[80%]" />
              </div>
            </div>
            <div className="text-center text-green-600 text-4xl font-bold mt-6">
              HAVE RECIEVED YOUR APPLICATION. <br /> WE ARE VERIFYING THE
              PAYMENT AND YOUR BTC WILL BE SENT ONCE YOUR DEPOSIT IS CONFIRMED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
