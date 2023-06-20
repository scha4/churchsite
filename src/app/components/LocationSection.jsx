import React from "react";
import { BsMapFill, BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
function LocationSection() {
  return (
    <>
      <div className="flex items-center flex-col gap-3 lg:flex-row lg:justify-evenly  py-12">
        <h1 className="text-teal-600 text-2xl font-bold">Rhema Church</h1>
        <div className="flex flex-row items-center lg:w-1/3  mx-3 ">
          <BsMapFill className="mr-4" size={25} fill="#64748b" />
          <div className=" w-fit text-slate-600">
            서울특별시 강동구 강동대로 205 (성내동, JYP Center) 우 05407 205,
            Gangdong daero, Gangdong-gu, Seoul, Republic of Korea
          </div>
        </div>
        <div className="flex flex-row items-center text-slate-600 lg:text-xl">
          <BsFillTelephoneFill size={25} className="mr-3" />
          <meta
            name="format-detection"
            content="telephone= no, date=no, email=no, address=no"
          />
          02-2225-8100
        </div>
      </div>
      <div>
        <Image
          src="/exmap.jpg"
          className="w-full"
          alt="mapImage"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </>
  );
}

export default LocationSection;
