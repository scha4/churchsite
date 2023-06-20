import React from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
function Sermons() {
  return (
    <>
      <div className="relative ">
        <Image
          alt="manpreach"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full"
          src="/manpreaching.jpg"
        />

        <div className="absolute inset-0 grid h-full w-full  ">
          <div className="  w-11/12 flex flex-col items-end justify-center mr-2 ">
            <Typography
              variant="lead"
              color="white"
              className=" lg:text-4xl font-bold text-lg flex justify-center text-center mt-2 "
            >
              LATEST SERMON
            </Typography>

            <Typography
              variant="lead"
              color="white"
              className=" lg:text-3xl   font-bold text-md mt-5 text-end text-teal-600"
            >
              &apos;MY HOUSE SHALL SERVE THE LORD&apos;
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" md:text-2xl font-bold text-md mt-5 text-end text-teal-600"
            >
              JOSHUA 24:15
            </Typography>
            <Button className="mt-5 bg-teal-600">WATCH NOW</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sermons;
