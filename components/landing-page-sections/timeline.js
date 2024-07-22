import React from 'react';
import InlineSVG from '../utils/InlineSVG';

export default function Timeline({ headline, columns, paragraph, cta_text, cta_url }) {
  return (
    <section className="section-py bg-alternate">
      <div className="container">
        <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight text-center">{headline}</h2>
        <ol className="items-center lg:flex py-0 lg:py-10">
          {columns && columns.length > 0 && columns.map((column, index) => (
            <li key={index} className="relative mb-6 lg:mb-0 w-full">
              <div className="flex items-center justify-center w-full">
                {/* Left line extending to the SVG */}
                <div className="flex-1 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <div className="z-10 flex items-center justify-center w-8 h-8 mx-3 shrink-0">
                  {column.media && (
                    <InlineSVG
                      alt={column.headline}
                      className="svg-convert"
                      src={column.media}
                      width="33"
                    />
                  )}
                </div>
                <div className="flex-1 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 lg:px-4 text-center">
                <h3 className="text-lg font-semibold">{column.headline}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-color-tone-3">{column.sub_headline}</time>
                <p className="text-base text-color-tone-2 leading-none font-medium">{column.paragraph}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="text-center">
          <p className="mb-6">{paragraph}</p>
          <a className="btn btn-md btn-outline" href={cta_url}>
            {cta_text}
          </a>
        </div>
      </div>
    </section>
  );
}