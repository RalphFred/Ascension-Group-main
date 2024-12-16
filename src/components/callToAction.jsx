import React from 'react';

const CallToAction = () => {
  return (
    <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      Ready to work with us? 
      <a href="#" className="font-semibold text-orange-600">
        <span className="absolute inset-0" aria-hidden="true"></span>
        Click here 
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};

export default CallToAction;
