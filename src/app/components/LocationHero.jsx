"use client";
import React from "react";

import { Typography, Button } from "@material-tailwind/react";
function LocationHero() {
  return (
    <div className="relative ">
      <img className="" src="../manpreaching.jpg" />

      <div className="absolute inset-0 grid h-full w-5/6 place-items-center ">
        <div className="w-full py-2  ml-20 ">
          <Typography
            variant="lead"
            color="white"
            className=" md:text-4xl font-bold text-lg "
          >
            LOCATION
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className=" md:text-3xl font-bold text-sm mt-5"
          >
            Sundays: 9 am | 11 am
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className=" md:text-3xl font-bold text-sm mt-5"
          >
            8925 Leesburg Pike, Vienna, VA 22182
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default LocationHero;
