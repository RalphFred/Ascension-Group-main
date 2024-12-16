import React from 'react';
import refuelingImage from '../assets/refueling.webp';
import oilImage from '../assets/oil.jpeg';
import carFixingImage from '../assets/fixing.jpg';
import carWashingImage from '../assets/washing.jpg';
import shoppingMartImage from '../assets/shopping.jpg';

const services = [
  {
    image: refuelingImage,
    alt: 'Refueling a car.',
    title: 'Petrol/ Diesel',
    subtitle: 'Per Litre',
    price: '$35',
  },
  {
    image: oilImage,
    alt: 'Engine oil',
    title: 'Engine Oil',
    subtitle: 'Per One',
    price: '$35',
  },
  {
    image: carFixingImage,
    alt: 'Man fixing car',
    title: 'Car Fixing Services',
  },
  {
    image: carWashingImage,
    alt: 'Washing car',
    title: 'Car Wash',
  },
  {
    image: shoppingMartImage,
    alt: 'Shopping Mart',
    title: 'Shopping Mart',
  },
];

const Services = () => {
  return (
    <div className="bg-white" id="services">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Services Offered</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <img
                src={service.image}
                alt={service.alt}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{service.title}</h3>
                  {service.subtitle && <p className="mt-1 text-sm text-gray-500">{service.subtitle}</p>}
                </div>
                {service.price && <p className="text-sm font-medium text-gray-900">{service.price}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
