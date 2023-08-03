import React from "react";

const HomeHowItWorks = () => {
  return (
    <div className="max-w-[1140px] mx-auto mt-16 opacity-90">
      <div className="flex items-center">
        <div className="bg-black w-[50px] h-[1px]" />
        <h1 className="text-lg font-semibold pl-3">WHY CHOOSE US</h1>
      </div>
      <h1 className="text-4xl font-bold">Easiest way to get a service</h1>
      <div className="flex justify-between my-10 mb-20">
        <div className="w-1/2">
          <iframe
            className="w-full h-[340px]"
            src="https://www.youtube.com/embed/OMW0BfVYSOI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div className="w-1/2 ml-16 ">
          <div className="">
            <div className="flex items-center">
              <div className="text-white text-center mt-1 cuHomeWorkbg w-[60px] h-[60px]  rounded-full flex items-center justify-center text-2xl">
                1
              </div>
              <div className="ml-10">
                <h1 className="font-bold text-2xl pt-1">Select the Service</h1>
                <p>
                  Pick the service you are looking for- from the website or the
                  app.
                </p>
              </div>
            </div>
            <div className="w-[1px] h-[70px] bg-black ml-[27px] -mt-[8px] -mb-[12px]" />
          </div>
          <div className="">
            <div className="flex items-center">
              <div className="text-white text-center mt-1 cuHomeWorkbg w-[100px] h-[60px]  rounded-full flex items-center justify-center text-2xl">
                2
              </div>
              <div className="ml-10">
                <h1 className="font-bold text-2xl">Pick your schedule</h1>
                <p>
                  Pick your convenient date and time to avail the service. Pick
                  the service provider based on their rating.
                </p>
              </div>
            </div>
            <div className="w-[1px] h-[70px] bg-black ml-[26px] -mt-[8px]" />
          </div>
          <div className="">
            <div className="flex items-center -mt-[12px]">
              <div className="text-white text-center mt-1 cuHomeWorkbg w-[110px] h-[60px]  rounded-full flex items-center justify-center text-2xl">
                3
              </div>
              <div className="ml-10">
                <h1 className="font-bold text-2xl">Place Your Order & Relax</h1>
                <p>
                  Review and place the order. Now just sit back and relax. We’ll
                  assign the expert service provider’s schedule for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHowItWorks;
