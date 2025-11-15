'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

export default function TestimonialsSection() {
  const { t } = useTranslation();

  // Get testimonial list (array) from i18n translations
  const testimonials = t('testimonials.list', { returnObjects: true });

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Title from translations */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t('testimonials.title')}
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {/* Loop through translated testimonials */}
          {Array.isArray(testimonials) &&
            testimonials.map((testimonial: any) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
