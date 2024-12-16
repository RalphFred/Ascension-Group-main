import React from "react";

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F07900] to-[#000] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%)" }}
        />
      </div>
      
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
      <div className="relative rounded-md px-3 py-1 text-sm text-center text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      Ready to work with us?
      <a href="#" className="font-semibold text-orange-600 cursor-pointer">
        <span className="absolute inset-0" aria-hidden="true"></span>
        Click here
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Ascension Group</h1>
          <p className="text-2xl text-center text-gray-500 mt-2">Here for You</p>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Fueling Your Journey, One Stop at a Time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Contact Us
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
