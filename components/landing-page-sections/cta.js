import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination } from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Pagination]);

const CTA = ({ heading, paragraph, icon_and_title }) => {
  useEffect(() => {
    console.log('Heading:', heading);
    console.log('Paragraph:', paragraph);
    console.log('Icon and Title Data:', icon_and_title);

    // Adding a delay to see if it's a timing issue
    setTimeout(() => {
      const swiperElements = document.querySelectorAll('.swiper-container');
      swiperElements.forEach(swiperElement => {
        const swiperInstance = swiperElement.swiper;
        if (swiperInstance) {
          swiperInstance.pagination.update();
          console.log('Swiper pagination updated:', swiperInstance.pagination);
        }
      });
    }, 1000); // 1 second delay

  }, [heading, paragraph, icon_and_title]);

  return (
    <section className="section-py bg-alternate" id="cta">
      <div className="container">
        <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight text-center">{heading}</h2>
        <div className="mx-auto max-w-6xl">
          <p className="text-center mb-4">{paragraph}</p>
        </div>
        {icon_and_title && icon_and_title.length > 0 && (
          <div className="swiper pt-4 pb-3">
            <Swiper
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
                el: '.swiper-pagination',
                clickable: true,
              }}
              onInit={(swiper) => {
                console.log('Swiper initialized:', swiper);
                console.log('Swiper pagination:', swiper.pagination);
              }}
              onSlideChange={(swiper) => console.log('Slide changed:', swiper.activeIndex)}
              onPaginationUpdate={(swiper) => console.log('Pagination updated:', swiper.pagination)}
            >
              {icon_and_title.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card card-body card-hover border-0 text-center mx-2">
                    <img alt={item.icon_title} className="d-block mx-auto mb-3 svg-convert" src={item.icon} width="82" />
                    <h3 className="font-semibold">{item.icon_title}</h3>
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

export default CTA;
