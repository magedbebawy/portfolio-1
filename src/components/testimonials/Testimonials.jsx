import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/angelica-badillo/',
      name: 'Angelica Badillo',
      test: "I had the pleasure of working closely with Maged for a year. Throughout our time working together, I was consistently impressed by Maged's dedication to producing high-quality code, as well as his willingness to go above and beyond to help unblock other members of our team.Maged was always eager to take on additional tasks and responsibilities, and consistently delivered outstanding results. His ability to think creatively and find innovative solutions to complex problems was truly inspiring, and I have no doubt that his contributions were a significant factor in the success of our projects.I would highly recommend Maged for any back-end development role, as he possesses not only the technical expertise required for the job, but also the passion and work ethic necessary to excel in any team environment.",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/rajatbmishra/',
      name: 'Rajat Mishra',
      test: "I highly recommend Maged for any software engineering position. As a software engineer with our company for a year, he consistently demonstrated exceptional technical skills, an innovative mindset, and a strong work ethic.I am confident that Maged Bebawy will excel in any role he takes on. He has a passion for his work, learning new technologies, and is committed to delivering quality results. I highly recommend Maged Bebawy and believe he will be an asset to any organization that he joins.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials