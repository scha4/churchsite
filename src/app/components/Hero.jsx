import React from "react";

function Hero() {
  return (
    <>
      <div className="py-20 bg-slate-100 ">
        <h1 className="hidden md:flex relative text-2xl font-bold text-teal-600 margin-auto ml-5   ">
          Bethel is a congregation rooted in the love of God, and dedicated to
          worldwide transformation through revival.
        </h1>
        <div className=" hidden md:grid grid-cols-2 h-auto   ">
          <div className=" mx-auto max-w-screen-xl col-span-1  flex flex-col md:items-left justify-center space-y-7 ml-5 mt-6">
            <h1 className="text-2xl font-bold">
              Every believer was created to belong to a community. It was never
              God’s heart for us to do this life alone.
            </h1>
            <h1 className="text-xl font-normal">
              Bethel is a congregation of worshippers of Jesus Christ in
              Redding, California, who long to see hearts ignited until heaven
              meets earth. We are on the edge of the greatest revival of all
              time. Get involved and join us as we pursue the personal,
              regional, and global expansion of God's kingdom through His
              manifest presence.
            </h1>
          </div>
          <div className=" flex  items-center justify-center pt-10 pb-10 ">
            <img
              src="./jesusworship.jpg"
              className=" lg:w-5/6 max-h-96 rounded-lg "
            />
          </div>
        </div>
        {/* // mobile */}
        <div className="md:hidden  bg-slate-200  pb-4 ">
          <div className="md:hidden  flex flex-col gap-2 justify-center space-y-2 ml-2 ">
            <h1 className="flex text-xl font-bold text-teal-400  margin-auto ">
              Bethel is a congregation rooted in the love of God, and dedicated
              to worldwide transformation through revival.
            </h1>
            <h1 className="text-lg font-bold">
              Every believer was created to belong to a community. It was never
              God’s heart for us to do this life alone.
            </h1>
            <h1 className="text-md font-bold">
              Bethel is a congregation of worshippers of Jesus Christ in
              Redding, California, who long to see hearts ignited until heaven
              meets earth. We are on the edge of the greatest revival of all
              time. Get involved and join us as we pursue the personal,
              regional, and global expansion of God's kingdom through His
              manifest presence.
            </h1>
          </div>
          <div className=" flex  items-center justify-center mt-8 ">
            <img
              src="./jesusworship.jpg"
              className=" max-w-5/6 max-h-96 rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
