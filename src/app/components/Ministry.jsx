"use client";
import React from "react";
import Image from "next/image";

import { Typography, Button } from "@material-tailwind/react";
function Ministry() {
  return (
    <>
      <div className="relative ">
        <Image
          alt="worship"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full"
          src="/churchworship.jpg"
        />

        <div className="absolute inset-0 grid h-full w-5/6 place-items-center ">
          <div className="w-full py-2  ml-20 ">
            <Typography
              variant="lead"
              color="white"
              className=" md:text-4xl font-bold text-2xl "
            >
              MINISTRIES
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" md:text-3xl font-bold text-lg mt-5"
            >
              There's a place for you in what God is doing in our house.
            </Typography>
            <Button className="mt-10 bg-teal-600 ">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ministry;
