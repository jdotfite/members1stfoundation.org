import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import InlineSVG from '../utils/InlineSVG';

const CardsSwiper = ({ headline, paragraph, cards }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="section-py bg-alternate">
      <div className="container">
        <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight text-center xl:max-w-2xl mx-auto">
          {headline}
        </h2>
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-center">{paragraph}</p>
        </div>
        {cards && cards.length > 0 && (
          <div className="swiper-container">
            <Swiper
              modules={[Pagination, Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              watchOverflow={true}
              spaceBetween={30}
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
                    <InlineSVG
                      src={card.icon}
                      alt="Icon"
                      width={92}
                      height={92}
                      className="mx-auto mb-2 svg-convert"
                    />
                    <div className="flex flex-col flex-grow">
                      <h3 className="font-bold text-3xl mb-5 uppercase text-center">{card.headline}</h3>
                      <p className="text-base flex-grow mb-10">{card.paragraph}</p>
                      <a className={`btn btn-md btn-${card.button_style} mx-auto`} href={card.button_url}>
                        {card.button_text}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
            <div ref={prevRef} className="swiper-button-prev"></div>
            <div ref={nextRef} className="swiper-button-next"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardsSwiper;