import React, { useState } from "react";
import Countdown from "react-countdown";

export default function CountDown() {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return <Countdown date={Date.now() + 21598920} renderer={renderer} />;
}
