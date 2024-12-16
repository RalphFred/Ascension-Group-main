import React from 'react';

const About = () => {
  return (
    <section className="text-gray-600 body-font" id="about">
      <div className="container px-5 py-10 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Adegbuyi Jackson</h2>
                <p className="text-sm text-gray-500">CEO</p>
                <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  At Ascension Enterprise, we are dedicated to fueling your journey with quality, convenience, and care. Whether it’s premium fuel, friendly service, or a clean environment, we’re here for you, every mile of the way.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8">
                Our mission is simple: to keep you moving. Whether you're refueling for a long trip, picking up essentials, or taking a moment to recharge, Ascension Enterprise is here to serve you. With a commitment to excellence and a passion for customer satisfaction, we aim to make every stop at our station a seamless and uplifting experience.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">Premium Fuel</h3>
                  <p className="text-gray-600 mt-2">High-quality fuel to enhance your vehicle's performance.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">Clean Environment</h3>
                  <p className="text-gray-600 mt-2">A clean, welcoming space that prioritizes your comfort.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">Friendly Service</h3>
                  <p className="text-gray-600 mt-2">Dedicated staff ready to assist with all your needs.</p>
                </div>
              </div>
              <div className="text-center mt-10">
                <p className="text-lg text-gray-700">
                  <span className="font-bold">Fuel your life with Ascension Enterprise</span> - here for you, every mile of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
