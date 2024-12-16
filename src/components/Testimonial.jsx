import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      image: 'https://dummyimage.com/302x302',
      text: 'Ascension Enterprise is my go-to fueling station. The staff is always friendly, and the environment is clean and welcoming. I love the efficiency, they get me back on the road in no time Highly recommended.',
      name: 'HOLDEN CAULFIELD',
      title: 'Senior Product Designer',
    },
    {
      image: 'https://dummyimage.com/300x300',
      text: 'Their premium fuel has noticeably improved my car\'s performance. The service is top-notch, and I never have to wait long. Ascension Enterprise truly stands out with their dedication to customer satisfaction.',
      name: 'ALPER KAMU',
      title: 'UI Developer',
    },
    {
      image: 'https://dummyimage.com/305x305',
      text: 'Ascension Enterprise’s car wash service is fantastic My car always comes out spotless and shining. The staff handles everything with care, and the prices are reasonable. It’s the best car wash experience I’ve had in a long time.',
      name: 'HENRY LETHAM',
      title: 'CTO',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center" id="testimonial">Testimonials</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.image} />
                <p className="leading-relaxed">{testimonial.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
