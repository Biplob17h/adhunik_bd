import React from 'react';

const HomeNumberSection = () => {
    return (
      <div className="w-full bg-[#f4f5f8] p-[30px] opacity-90">
        <div className="max-w-[1140px] mx-auto flex justify-between">
          <div className="text-center">
            <h1 className="text-5xl font-bold">15,000 +</h1>
            <h1 className="text-lg pt-1">Service Providers</h1>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">2,00,000 +</h1>
            <h1 className="text-lg pt-1">Order Served</h1>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">1,00,000 +</h1>
            <h1 className="text-lg pt-1">5 Star Received</h1>
          </div>
        </div>
      </div>
    );
};

export default HomeNumberSection;