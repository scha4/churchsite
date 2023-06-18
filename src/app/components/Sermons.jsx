import React from "react";
import { Typography, Button } from "@material-tailwind/react";
function Sermons() {
  return (
    <>
      <div className="relative ">
        <img className="" src="../preachMan.jpg" />

        <div className="absolute inset-0 grid h-full w-full  ">
          <div className="  w-11/12 flex flex-col items-end justify-center mr-2 ">
            <Typography
              variant="lead"
              color="white"
              className=" md:text-xl font-bold text-lg flex justify-center text-center "
            >
              LATEST SERMON
            </Typography>

            <Typography
              variant="lead"
              color="white"
              className=" md:text-3xl font-bold text-sm mt-5 text-end text-teal-600"
            >
              "MY HOUSE SHALL SERVE THE LORD
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" md:text-2xl font-bold text-sm mt-5 text-end text-teal-600"
            >
              JOSHUA 24:15
            </Typography>
            <Button className="mt-10 bg-teal-600">WATCH NOW</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sermons;
