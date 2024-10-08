import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
     return (
          <div>
               <div className="carousel w-ful h-[800px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img1}
      className="w-full rounded-xl" />
    <div className="absolute top-12 left-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white font-bold space-y-7 ml-5 my-5 w-1/3'>
               <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eligendi quaerat amet laudantium laborum reiciendis dicta quae ipsum totam nulla?</p>
               <div>
                     <button className='btn btn-primary mr-5'>Discover More</button> 
                     <button className='btn btn-outline btn-secondary'>Latest Projects</button> 
               </div>
         </div>
    </div>


    <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0">
      <a href="#slide4" className="btn btn-circle mr-4">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <img
      src={img2}
      className="w-full rounded-xl" />
       <div className="absolute top-12 left-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white font-bold space-y-7 ml-5 my-5 w-1/3'>
               <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eligendi quaerat amet laudantium laborum reiciendis dicta quae ipsum totam nulla?</p>
               <div>
                     <button className='btn btn-primary mr-5'>Discover More</button> 
                     <button className='btn btn-outline btn-secondary'>Latest Projects</button> 
               </div>
         </div>
    </div>
    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <img
      src={img3}
      className="w-full rounded-xl" />
       <div className="absolute top-12 left-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white font-bold space-y-7 ml-5 my-5 w-1/3'>
               <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eligendi quaerat amet laudantium laborum reiciendis dicta quae ipsum totam nulla?</p>
               <div>
                     <button className='btn btn-primary mr-5'>Discover More</button> 
                     <button className='btn btn-outline btn-secondary'>Latest Projects</button> 
               </div>
         </div>
    </div>
    <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <img
      src={img4}
      className="w-full rounded-xl" />
       <div className="absolute top-12 left-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white font-bold space-y-7 ml-5 my-5 w-1/3'>
               <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eligendi quaerat amet laudantium laborum reiciendis dicta quae ipsum totam nulla?</p>
               <div>
                     <button className='btn btn-primary mr-5'>Discover More</button> 
                     <button className='btn btn-outline btn-secondary'>Latest Projects</button> 
               </div>
         </div>
    </div>
    <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
          </div>
     );
};

export default Banner;