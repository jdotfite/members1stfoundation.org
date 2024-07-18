import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import InlineSVG from '../utils/InlineSVG';

const IconsSwiper = ({ headline, paragraph, icon_and_title }) => {
  return (
    <section className="section-py bg-alternate" id="icons-swiper">
      <div className="container">
        <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight text-center">{headline}</h2>
        <div className="mx-auto max-w-6xl">
          <p className="text-center mb-5">{paragraph}</p>
        </div>
        {icon_and_title && icon_and_title.length > 0 && (
          <div className="swiper pt-4 pb-3">
            <Swiper
              modules={[Pagination]}
              spaceBetween={8}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 3 },
                700: { slidesPerView: 3 },
                900: { slidesPerView: 4 },
                1160: { slidesPerView: 5 },
                1500: { slidesPerView: 7 },
              }}
              pagination={{
                clickable: true,
              }}
             
            >
              {icon_and_title.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card card-body card-hover border-0 text-center mx-2">
                    <InlineSVG   
                      alt={item.icon_title} 
                      className="d-block mx-auto mb-3 svg-convert" 
                      src={item.icon} 
                      width="82" 
                    />
                    <h3 className="font-semibold">{item.icon_title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default IconsSwiper;