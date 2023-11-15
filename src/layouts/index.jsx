import React from "react";
import Header from "./header";

export default function index({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
