"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

function BeliefsHero() {
  return (
    <div className="relative ">
      <Image
        alt="worship"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full"
        src="/bible.jpg"
      />

      <div className="absolute inset-0 flex items-center justify-center  ">
        <div className=" ">
          <Typography
            variant="lead"
            color="white"
            className=" lg:text-7xl font-bold text-2xl lg:mb-44 mb-16 "
          >
            What We Believe
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default BeliefsHero;
