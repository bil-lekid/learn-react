"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdAnalytics, MdDashboard, MdHistory, MdWallet } from "react-icons/md";
import Image from "next/image";
import { FaBitcoin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoMdJournal } from "react-icons/io";
import { handleClientScriptLoad } from "next/script";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard className="text-3xl rounded-2xl" />,
  },
  {
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: <MdAnalytics className="text-3xl rounded-2xl" />,
  },
  {
    title: "Assets",
    path: "/dashboard/assets",
    icon: <MdWallet className="text-3xl rounded-2xl" />,
  },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: <MdHistory className="text-3xl rounded-2xl" />,
  },
  {
    title: "Trading Journal",
    path: "/dashboard/journal",
    icon: <IoMdJournal className="text-3xl rounded-2xl" />,
  },
];

const MenuLink = ({
  item,
  className,
}: {
  item: {
    title: string;
    path: string;
    icon: React.ReactNode;
  };
  className?: string;
}) => {
  return (
    <Link
      className="w-full md:flex justify-between items-center p-2"
      href={item.path}
    >
      {item.icon}
      <p className="text-base text-center">{item.title}</p>
    </Link>
  );
};

const Sidebar = ({ className }: SidebarProps) => {
  const pathName = usePathname();

  return (
    <div className={` ${className}`}>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <button className="w-full md:w-40 md:flex justify-between items-center transition duration-500 hover:bg-[#514885] rounded-xl p-2 mb-4">
        <FaBitcoin className="text-3xl rounded-2xl" />
        <span>Portfolios</span>
      </button>
      <ul className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <li
            key={item.title}
            className={`transition duration-500 hover:bg-[#514885] rounded-xl ${
              pathName === item.path ? "bg-[#514885]" : ""
            }`}
          >
            <MenuLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
