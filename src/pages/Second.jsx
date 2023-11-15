import React, { Fragment, useState } from "react";
// import { Listbox, Transition, FocusTtrap, RadioGroup,Disclosure } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import CountDown from "../components/CountDown";
import { networks } from "../config/index";

export default function Second() {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [errors, setErrors] = useState({ address: "", network: "" });

  const submitForm = () => {
    if (!selectedAddress) {
      setErrors({
        address: "empty",
        network: selectedNetwork,
      });
      return;
    }

    if (!selectedNetwork) {
      setErrors({
        address: selectedAddress,
        network: "empty",
      });
      return;
    }

    if (selectedAddress && selectedNetwork) {
      setErrors({
        address: selectedAddress,
        network: selectedNetwork,
      });
      window.location.href = "/third";
    }
  };

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
        <div className="flex justify-center items-center mt-20">
          <div className="">
            <div className="block mb-14">
              <label
                htmlFor=""
                className="text-lg font-medium w-full text-lightblack mb-3"
              >
                Enter your wallet address that you wish to receive the BTC at
              </label>
              <input
                type="text"
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
                placeholder="wallet address"
                className={`text-lg mt-2 p-4 w-full border-2 ${
                  errors.address === "empty"
                    ? "border-red-500"
                    : "border-gray-500"
                } rounded-md focus:outline-none`}
              />
              {errors.address !== "empty" ? (
                ""
              ) : (
                <p className=" text-red-600">
                  Please input your wallet address!
                </p>
              )}
            </div>
            <div className="block mb-14">
              <label
                htmlFor=""
                className="text-lg font-medium w-full text-lightblack"
              >
                Select Network
              </label>
              {/* <Listbox value={selectedNetwork} onChange={setSelectedNetwork}>
                <div className="relative mt-2">
                  <Listbox.Button className="relative border-2 border-gray-500 w-full cursor-default rounded-md bg-white py-5 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate font-medium">
                      {selectedNetwork ? (
                        selectedNetwork.name
                      ) : (
                        <span className="text-lg text-gray-400 font-normal">
                          select network
                        </span>
                      )}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {networks.map((network) => (
                        <Listbox.Option
                          key={network.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={network}
                        >
                          {({ selected }) => (
                            <div>
                              <span
                                className={`block truncate text-lg font-medium`}
                              >
                                {network.name}
                              </span>
                              <span className="block">{network.subname}</span>
                              {selectedNetwork.id === network.id ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5 text-amber-600"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox> */}
              {errors.network !== "empty" ? (
                ""
              ) : (
                <p className=" text-red-600">Please select network!</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={submitForm}
                className="px-7 py-2 bg-yellow-400 hover:bg-yellow-500 text-xl rounded-sm"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
