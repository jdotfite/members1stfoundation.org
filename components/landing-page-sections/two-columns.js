import React from 'react';
import Image from 'next/image';

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
  background_color
}) => {
  const mediaComponent = (
    <div className="mt-8 md:mt-0">
      <Image
        src={media}
        alt={media_alt_text || "Descriptive image"}
        width={800}
        height={600}
        layout="responsive"
        className="w-full rounded-sm shadow-sm"
      />
    </div>
  );

  const contentComponent = (
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
  );

  return (
    <section className={`section-py ${background_color}`}>
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-10 items-center ${media_position === 'left' ? 'md:flex-row-reverse' : ''}`}>
          {media_position === 'left' ? (
            <>
              {mediaComponent}
              {contentComponent}
            </>
          ) : (
            <>
              {contentComponent}
              {mediaComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;