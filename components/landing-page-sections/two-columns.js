import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TwoColumnSection = ({ 
  headline, 
  content, 
  html,
  button_text, 
  button_url, 
  button_id, 
  media, 
  media_alt_text,
  media_position,
  background_color,
  section_id,
  animate_text,
  animate_media
}) => {
  const { ref, inView } = useScrollAnimation();

  const MotionWrapper = ({ children, shouldAnimate, variants }) => {
    if (shouldAnimate) {
      return (
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      );
    }
    return <>{children}</>;
  };

  const mediaComponent = (
    <MotionWrapper 
      shouldAnimate={animate_media}
      variants={media_position === 'left' ? slideInLeft : slideInRight}
    >
      <div className="mt-8 md:mt-0">
        <Image
          src={media}
          alt={media_alt_text || "Descriptive image"}
          width={800}
          height={600}
          layout="responsive"
          className="w-full rounded-sm shadow-sm"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>
    </MotionWrapper>
  );

  const textComponent = (  
    <MotionWrapper 
      shouldAnimate={animate_text} 
      variants={media_position === 'left' ? slideInRight : slideInLeft}
    >
      <div>
        <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight">
          {headline}
        </h2>
        {html ? (
          <div className="mb-8" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p className="mb-8">{content}</p>
        )}
        <a 
          className="btn btn-md btn-outline btn-ripple" 
          href={button_url}
          id={button_id}
        >
          {button_text}
        </a>
      </div>
    </MotionWrapper>
  );

  return (
    <section ref={ref} className={`section-py ${background_color}`} id={section_id}>
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-10 items-center ${media_position === 'left' ? 'md:flex-row-reverse' : ''}`}>
          {media_position === 'left' ? (
            <>
              {mediaComponent}
              {textComponent} 
            </>
          ) : (
            <>
              {textComponent}  
              {mediaComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;