import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
     return (
          <div>
               <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
     <div className='lg:w-1/2 relative'>
     <img
      src={person}
      className="w-3/4 rounded-lg shadow-2xl" />
     <img
      src={parts}
      className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white " />
     </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <h3 className='text-3xl text-orange-600 font-semibold'>About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
          </div>
     );
};

export default About;