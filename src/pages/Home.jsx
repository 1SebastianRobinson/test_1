import React, { useState } from "react";
import Banner from "../assets/images/banner.png";
import CountDown from "../components/CountDown";

const Home = () => {
  const [startTime, setStartTime] = useState(21598920);

  // const Completionist = () => <span>You are good to go!</span>;

  // const renderer = ({ hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return <Completionist />;
  //   } else {
  //     // Render a countdown
  //     return (
  //       <span>
  //         {hours}:{minutes}:{seconds}
  //       </span>
  //     );
  //   }
  // };

  return (
    <div className="">
      <div className="pt-24 pb-10 bg-darkbrown">
        <div className="container mx-auto">
          <div className=" lg:flex-row flex items-center flex-col-reverse">
            <div className="flex flex-col w-full">
              <div className="text-center lg:text-start text-7xl text-white font-bold leading-[80px]">
                Change Your BUSD For Bitcoin
              </div>
              <div className="text-center lg:text-start text-center  text-xl text-gray-400 mt-3">
                Buy BTC using your BUSD at price 24000 BUSD
              </div>
              <div className=" lg:justify-start md:flex justify-center px-3">
                <a
                  href="second"
                  className=" sm:w-fit w-full cursor-pointer bg-yellow-400 py-2 px-6 rounded-sm mt-20 hover:bg-yellow-500 text-xl"
                >
                  Exchange Now
                </a>
              </div>
            </div>
            <div className=" flex-shrink-0">
              <img src={Banner} alt="" className="lg:w-[800px] w-[600px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" pt-20 pb-10">
          <div className="flex items-center justify-between">
            {/* <div className=" font-bold text-5xl">
              Limited offer, for 6 hours only!
            </div> */}
            {/* <div className=" font-bold text-5xl">
              <CountDown />
            </div> */}
          </div>
          <div className="text-2xl py-10">
          BTCBUSD is selling 10 % of its own BITCOINS.
Selling will start in 15 Nov 2023.
Price will be 27000 BUSD per 1 BTC , and, 28000 USDT per 1 BTC.
BTCBUSD took this decision in co-operation with Binance to Pump and Support the most stable Cryptocurrency BITCOIN.
Binance, the world-renowned cryptocurrency exchange, has made a significant announcement that has sent ripples throughout the crypto community. In a recent blog post, the exchange declared its intention to cease support for the Binance USD (BUSD) stablecoin.



This decision comes on the heels of Paxos’ move to halt the production of new BUSD coins. By February 2024, Binance users must transition away from BUSD, prompting them to explore other stablecoin options or digital assets.
For more info visit https://www.binance.com/en/feed/post/1064069



For this reason, Binance.com and Crypto.com decided to help their clients to exchange their own BUSD into other Cryptocurrencies, Plus, they decided to support BTC buying power to support it
          </div>
          <a className="hover:bg-yellow-500 bg-yellow-400 py-2 px-6 text-xl rounded-sm" href="second">
            Buy Bitcon Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;