import React, { ReactNode } from "react";

export default function Highlight({ children }: { children: ReactNode }) {
  return (
    <span id="wd-highlight" style={{ backgroundColor: "yellow", color: "red" }}>
      <h4 style={{ color: "black" }}>Highlight</h4>
      {children} <hr />
    </span>
  );
}
