"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export default function NavbarMain() {
  const [openNav, setOpenNav] = useState(false);
  const [directoryOpen, setDirectoryOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 hover: ">
      <Typography
        as="li"
        className="p-1 font-bold border border-white lg:border-none py-2   "
        onClick={() => setDirectoryOpen((prev) => !prev)}
      >
        <span className="flex items-center ">
          Church
          {!directoryOpen ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
        </span>
        {directoryOpen && (
          <div
            className="lg:absolute relative  text-teal-600 flex flex-col py-2 items-left px-5 rounded-lg
         bg-white border border-teal-600"
          >
            <div className="flex flex-col lg:gap-3 gap-2">
              <Link href="/about">About Us</Link>
              <a href="#">Location</a>
              <a href="#"> Beliefs</a>
              <Link href="/leadership"> Staff</Link>
            </div>
          </div>
        )}
      </Typography>

      <Typography
        as="li"
        className="p-1 font-bold border border-white lg:border-none  py-2 "
      >
        <a href="#" className="flex items-center ">
          Get Involved
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-bold border border-white lg:border-none py-2  "
      >
        <a href="#" className="flex items-center">
          Events
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-bold border border-white lg:border-none py-2  "
      >
        <a href="#" className="flex items-center">
          Give
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky inset-0 z-10  mx-auto max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-teal-600  ">
      <div className="container mx-auto flex items-center justify-between z-10 ">
        <Typography className="mr-4 cursor-pointer py-1.5  text-white text-2xl font-bold ">
          <Link href="/">RHEMA CHURCH</Link>
        </Typography>
        <div className="hidden lg:block ">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto border border-white lg:hidden ">
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
}
