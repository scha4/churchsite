import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
function Location1() {
  return (
    <>
      <div className="lg:grid grid-cols-2 flex-col py-20 gap-3 ">
        {" "}
        <div className="col-start-1 flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-xl font-semibold">LOCATION</h1>
          <h1 className="lg:text-4xl font-bold text-3xl ">Come Join Us</h1>
          <h1>Come join us this Sunday at 11:00am</h1>
          <Button className="w-36 bg-teal-600">
            <Link href="/location"> Learn More</Link>
          </Button>
        </div>
        <div className="hidden col-start-2 lg:flex item-center justify-center mb-10 ">
          <Image
            src="/cross.jpg"
            alt="cross"
            width="0"
            height="0"
            sizes="100vw"
            className="lg:w-5/6  md:max-w-[70%] "
          />
        </div>
      </div>
    </>
  );
}

export default Location1;
