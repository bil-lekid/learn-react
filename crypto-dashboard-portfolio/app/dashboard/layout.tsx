import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import { ThemeProvider } from "../ui/ThemeProvider";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex">
      <div className=" bg-[#231f39]">
        <Sidebar className="sticky h-screen p-[20px]" />
      </div>
      <div className="flex-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
