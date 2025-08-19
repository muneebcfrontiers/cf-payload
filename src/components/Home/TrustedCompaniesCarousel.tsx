'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const companies = [
  { name: 'Unidos US', logo: '/c1.svg' },
  { name: 'International Alert', logo: '/c2.svg' },
  { name: 'WWF', logo: '/c3.svg' },
  { name: 'Save the Children', logo: '/c4.svg' },
  { name: 'ASU Transborder Studies', logo: '/c5.svg' },
  { name: 'University of Washington', logo: '/c6.svg' },
  { name: 'ACLU New Jersey', logo: '/c7.svg' },
  { name: 'BSI', logo: '/c8.svg' },
  { name: 'JSI', logo: '/c9.svg' },
];

export default function TrustedCompaniesCarousel() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Companies That Trust Us</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {companies.map((company, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={company.logo}
              alt={company.name}
              className="h-40 mx-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
