import React from 'react';
import {useState, useEffect} from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
      const [services, setServices] = useState([]);

      useEffect(()=>{
             fetch('services.json')
             .then(res=>res.json())
             .then(data=>setServices(data))
      },[])
     return (
          <div>
                <div className='text-center my-5'>
                      <h3 className="text-3xl text-orange-600"> Our Services</h3>
                      <h2 className="text-5xl">Our Service Area</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nisi sint? <br /> Possimus sequi laboriosam eum.</p>
                </div> 

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                     {
                           services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                           ></ServiceCard>)
                     }
                </div>

          </div>
     );
};

export default Services;