"use client";
import { Typography } from "@material-tailwind/react";
export default function VideoBack() {
  return (
    <>
      <div className="relative">
        <video className="object-cover" controls autoPlay muted loop>
          <source src="/lionVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-full py-2  text-center ">
            <Typography
              variant="lead"
              color="white"
              className=" md:text-5xl font-bold text-lg "
            >
              On Earth As it is in Heaven
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" md:text-3xl font-bold text-sm"
            >
              Experience God this Sunday
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
