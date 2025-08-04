import React from "react";
import Navbar from "./Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div className="layout-wrapper">
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      {/* <div> */}
      {/* footer/etc */}
      {/* </div> */}
    </div>
  );
}
