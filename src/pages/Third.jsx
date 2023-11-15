import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import ChartImg from "../assets/images/chart.png";
import CountDown from "../components/CountDown";

export default function Third() {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <div className=" md:justify-start flex justify-between flex-row flex-wrap">
          <div className="sm:text-start text-4xl font-bold text-center">
            Limitted offer, for 6 hours only!
          </div>
          <div className="sm:text-start max-sm:w-full max-sm:m-0 text-4xl font-bold text-center ml-10">
            <CountDown />
          </div>
        </div>
        <div className="block mt-16 mb-10 p-12 border-2 border-gray-400 rounded-md">
          <div className="flex justify-center">
            <div className="w-[70px] h-[70px] rounded-full border-4 border-green-600 flex justify-center items-center">
              <CheckIcon className=" text-green-600 w-[80%]" />
            </div>
          </div>
          <div className="text-center text-green-600 text-4xl font-bold mt-6">
            We have received your BTC receiving wallet address <br />{" "}
            successfully
          </div>
          <div className="text-center text-2xl mt-10 font-bold">
            Kindly buy it now
          </div>

          <div className="flex flex-wrap flex-row justify-around">
            <div className=" flex-col mt-10">
              <div className="flex justify-center flex-shrink-0">
                <img
                  src={ChartImg}
                  alt=""
                  className="w-[550px] flex-shrink-0"
                />
              </div>
              <div className="flex justify-center">
                <a
                  href="forth"
                  className=" px-6 py-2 bg-yellow-400 text-xl rounded-md hover:bg-yellow-500 my-5"
                >
                  Buy using BUSD at price 27000
                </a>
              </div>
            </div>
            <div className="flex-col mt-10">
              <div className="flex justify-center flex-shrink-0">
                <img src={ChartImg} alt="" className="md:w-[550px]" />
              </div>
              <div className="flex justify-center">
                <a
                  href="forth"
                  className="px-6 py-2 bg-yellow-400 text-xl rounded-md hover:bg-yellow-500 my-5"
                >
                  Buy using USDT at price 28000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
