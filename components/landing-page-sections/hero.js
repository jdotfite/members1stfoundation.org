import React from "react";

export default function Hero({ preHeadline, headline, subheadline, image, buttonLabel, buttonUrl, section_id }) {
  console.log('Hero component - section_id:', section_id);
    return (
    <section id={section_id} >
    <div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
         style={{
           backgroundImage: image ? `url(${image})` : 'none',
           height: image ? 'calc(100vh)' : 'auto'
         }}>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-70 dark:opacity-80"></div>
      <main className="px-4 sm:px-6 lg:px-10 z-10">
        <div className="text-center">
          <h2 className="mb-4 text-7xl font-bold tracking-tight leading-none uppercase">
            {preHeadline && (
              <span className="text-m1-red">{preHeadline}</span>
            )}
            <span className="md:text-6xl text-5xl block tracking-wide text-white">
              {headline}
            </span>
          </h2>
          <p className="mt-3 text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 font-opensans">
            {subheadline}
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-center">
            <div className="rounded-md shadow">
              <a href={buttonUrl} className="btn btn-lg btn-outline-onBackground btn-ripple btn text-white border-2 border-color-white hover:bg-white hover:text-black">{buttonLabel}</a>
            </div>
          </div>
        </div>
        <div className="scroll_icon_wrap">
          <a aria-label="Scroll down" className="scroll_link bloop text--white" href="#mission">
            <svg aria-hidden="true" className="animate-bounce fill-white" focusable="false" role="presentation" viewBox="0 0 30 17">
              <path d="M0 3.235 3.525 0l11.473 10.509L26.473 0 30 3.235 14.998 17z" fillRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </main>
    </div>
    </section>
  );
}
