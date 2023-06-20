import React from "react";
import Image from "next/image";
function AboutSection() {
  return (
    <>
      <div className="lg:grid grid-cols-2 flex-col lg:py-20 gap-3 pb-10 ">
        <div className="col-start-1 flex item-center justify-center mb-10 ">
          <Image
            alt="leaderImage"
            width={0}
            height={0}
            sizes="100vw"
            src="/cross.jpg"
            className="lg:w-5/6  md:max-w-[70%]"
          />
        </div>
        <div className="col-start-2 flex flex-col gap-3  mx-3">
          <h1 className="text-lg">ABOUT</h1>
          <h1 className="lg:text-4xl font-semi-bold text-3xl ">WHO WE ARE</h1>
          <p>
            Bethel is a congregation rooted in the love of God and dedicated to
            worldwide transformation through revival. The Lord has given us a
            mandate to be a resource center to impact cities and nations. We
            believe we&apos;re on the edge of the greatest revival of all time.
          </p>
          <p>
            We are a vibrant family of hope-filled believers who deeply
            experience the love and presence of God and partner with Jesus to
            express the joy and power of His kingdom in every area of life. At
            the center of our gatherings is a pursuit of God&apos;s presence,
            where our hearts are transformed and launched into our destinies. We
            are excited to run with you and pursue God&apos;s presence until the
            earth looks like heaven.
          </p>
          <p>We welcome you to join us in this adventure!</p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
