import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      client_name: "Jane Doe",
      client_avatar: "",
      client_review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      client_name: "Alex Smith",
      client_avatar: "",
      client_review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      client_name: "Robert Taylor",
      client_avatar: "",
      client_review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      client_name: "Samantha Smith",
      client_avatar: "",
      client_review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonials.map((testimonial, index) => (
        <SwiperSlide className="testimonial" key={index}>
          <div className="client__avatar">
            <img
              src={testimonial.client_avatar}
              alt={"Client Avatar number" + index}
            />
          </div>
          <h5 className="client__name">{testimonial.client_name}</h5>
          <small className="client__review">{testimonial.client_review}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
