import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const CardsSwiper = ({ headline, paragraph, cards }) => {
  return (
    <section className="section-py bg-alternate">
      <div className="container">
        <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight text-center xl:max-w-2xl mx-auto">
          {headline}
        </h2>
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-center">{paragraph}</p>
        </div>
        {cards && cards.length > 0 && (
          <div className="swiper">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 1 },
                700: { slidesPerView: 2 },
                900: { slidesPerView: 2 },
                1160: { slidesPerView: 3 },
                1500: { slidesPerView: 3 },
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
              aria-live="polite"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="h-full w-full p-6 bg-color-tone-6 rounded overflow-hidden shadow-md flex flex-col dark:shadow-md">
                    <Image
                      src={card.icon}
                      alt="Icon"
                      width={92}
                      height={92}
                      className="mx-auto mb-2 svg-convert"
                    />
                    <div className="flex flex-col flex-grow">
                      <h3 className="font-bold text-3xl mb-5 uppercase text-center">{card.headline}</h3>
                      <p className="text-base flex-grow mb-10">{card.paragraph}</p>
                      <a className={`btn btn-md btn-${card.button_style || 'outline'} mx-auto`} href={card.button_url}>
                        {card.button_text}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-center swiper-pagination relative mt-4"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardsSwiper;