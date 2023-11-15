import React, { Fragment, useState } from "react";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import CountDown from "../components/CountDown";
import { Tooltip } from "react-tooltip";
import { networks1, currencies, addresses } from "../config";

export default function Forth() {
  const [copied, setCopied] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState();

  setTimeout(() => {
    setCopied(false);
  }, 1000);

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
        <div className="flex justify-center mt-16 flex-wrap">
          <ol className="max-w-[500px] w-full relative text-gray-500 border-l border-gray-200 dark:border-gray-700 max-w-[500px]">
            <li className="mb-10 ml-6">
              <span
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                  selectedCurrency ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-medium leading-tight mb-3">
                Choose the currency
              </h3>
              <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
                <div className="relative mt-2">
                  <Listbox.Button className="relative border-2 border-gray-500 w-full cursor-default rounded-md bg-white py-5 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate font-medium">
                      {selectedCurrency ? (
                        selectedCurrency.name
                      ) : (
                        <span className="text-lg text-gray-400 font-normal">
                          choose currency
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
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {currencies.map((currency) => (
                        <Listbox.Option
                          key={currency.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={currency}
                        >
                          {({ selected }) => (
                            <div>
                              <span
                                className={`block truncate text-lg font-medium`}
                              >
                                {currency.name}
                              </span>
                              <span className="block">{currency.subname}</span>
                              {selectedCurrency ? (
                                selectedCurrency.id === currency.id ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="h-5 w-5 text-amber-600"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </li>
            <li className="mb-10 ml-6">
              <span
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                  selectedNetwork ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-medium leading-tight mb-3">Select network</h3>

              <Listbox value={selectedNetwork} onChange={setSelectedNetwork}>
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
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {networks1.map((network) => (
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
                              {selectedNetwork ? (
                                selectedNetwork.id === network.id ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="h-5 w-5 text-amber-600"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </li>
            <li className="ml-6">
              <span
                className={`absolute flex items-center justify-center w-8 h-8 ${
                  selectedNetwork && selectedCurrency
                    ? "bg-green-600"
                    : "bg-gray-400"
                } rounded-full -left-4 ring-4 ring-white`}
              >
                <svg
                  className="w-3.5 h-3.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-medium leading-tight mb-3">
                Deposit Address
              </h3>
              {selectedNetwork ? (
                <div className="block border-2 border-gray-400 rounded-md">
                  <div className="flex items-center p-5 border-b-2 border-gray-400">
                    <div className="flex-col w-[70px]">
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={
                          addresses[
                            selectedNetwork ? selectedNetwork.id - 1 : ""
                          ].name
                        }
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                    <div className="block ml-5">
                      <h1 className="font-medium mb-2">
                        {selectedNetwork ? selectedNetwork.name : "Empty"}{" "}
                        Address
                      </h1>
                      <div className="flex">
                        <p className="w-full text-black font-medium break-all">
                          {selectedNetwork
                            ? addresses[selectedNetwork.id - 1].name
                            : "Empty"}
                        </p>
                        <CopyToClipboard
                          text={
                            selectedNetwork
                              ? addresses[selectedNetwork.id - 1].name
                              : "Empty"
                          }
                          onCopy={() => setCopied(true)}
                        >
                          <a
                            data-tooltip-id="copy-tooltip"
                            data-tooltip-content="Copied!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 ml-2 cursor-pointer"
                            >
                              <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                              <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                            </svg>
                          </a>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                  <div className="block p-5 pt-3">
                    <div className="flex items-center justify-between border-b border-gray-400 pt-2 pb-1">
                      <h1>Minimum deposit amount</h1>
                      <p className="text-black font-medium">0.001 BUSD</p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-400 pt-2 pb-1">
                      <h1>Expected Arrival</h1>
                      <p className="text-black font-medium">
                        64 network confirmations
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-400 pt-2 pb-1">
                      <h1>Contract address</h1>
                      <p className="text-black font-medium">
                        Ending with{" "}
                        <a href="" className=" text-blue-700 underline">
                          c7c53
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-gray-400 rounded-md">
                  <div className="p-5">
                    <div
                      role="status"
                      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
                    >
                      <div className="flex items-center justify-center bg-gray-300 rounded sm:w-[120px] sm:h-[75px] dark:bg-gray-400">
                        <svg
                          className="w-10 h-10 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                      </div>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-y-gray-400 p-5">
                    <div
                      role="status"
                      className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ol>
          {selectedNetwork && selectedCurrency ? (
            <div className="w-full">
              <div className="w-full flex justify-center mt-10">
                <a
                  href="fifth"
                  className=" sm:w-fit w-full cursor-pointer bg-yellow-400 py-2 px-6 rounded-md hover:bg-yellow-500 text-xl"
                >
                  Confirm
                </a>
              </div>
              <div className="mt-1 text-green-600 text-center">
                If you successfully paid, kindly click on confirm
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Tooltip isOpen={copied} id="copy-tooltip" />
    </div>
  );
}
