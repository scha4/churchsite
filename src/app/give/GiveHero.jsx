"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

function giveHero() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:h-[36rem] lg:items-center  space-y-10 flex flex-col pb-14 ">
      <div className="lg:flex lg:flex-col lg:gap-10 lg:ml-8 mx-4 mt-10  ">
        <div className="text-lg mt-6 lg:mt-0">GIVE TO BETHEL</div>
        <div className="text-4xl mt-5">Generosity Is a Form of Worship</div>
        <p className="mt-6 lg:mt-0">
          When we give through tithes and offerings from the blessings God has
          provided, it displays our worship, gratitude, and devotion to Him.
          Thank you for sowing into all that God is doing, and be sure to check
          out our Offering Readings as you give!
        </p>
        <Button className="w-36 bg-teal-600 mt-6 lg:mt-0">Give Now</Button>
      </div>
      <div className="mx-10">
        <Image
          className="w-full "
          alt="leaderImage"
          width={0}
          height={0}
          sizes="100vw"
          src="/jesusworship.jpg"
        />
      </div>
    </div>
  );
}

export default giveHero;
