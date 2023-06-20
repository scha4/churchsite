"use client";
import React from "react";
import Image from "next/image";
import config from "../index.json";
import { Typography } from "@material-tailwind/react";
function LeadersList() {
  const staff = config.staff;
  return (
    <>
      <div className=" bg-white py-12">
        <Typography className="lg:text-5xl text-3xl font-semibold text-slate-500 text-center ">
          Leaders
        </Typography>
        <div className="flex lg:flex-row flex-col items-center  gap-5 flex-wrap justify-center mt-10  ">
          {staff.staff.map((item) => (
            <div className="flex flex-col px-4 py-4 gap-1 " key={item.id}>
              <Image
                src={item.image}
                alt="leaderImage"
                width={0}
                height={0}
                sizes="100vw"
                className="w-56 h-56 items-center rounded-md"
              />
              <div className="text-2xl font-bold items-start mt-3">
                {item.name}
              </div>
              <div className="text-lg font-normal">{item.position}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LeadersList;
