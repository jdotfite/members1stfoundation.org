import React, { useEffect, useState, memo } from 'react';
import Image from 'next/image';

const InlineSVG = memo(({ src, width, className, ...props }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    if (src) {
      fetch(src)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(data, 'image/svg+xml');
          const svgElement = svgDoc.querySelector('svg');

          if (svgElement) {
            // Add classes
            className.split(' ').forEach(cls => {
              if (cls !== 'svg-convert') {
                svgElement.classList.add(cls);
              }
            });
            svgElement.classList.add('svg-converted');

            // Set width and height
            if (width) {
              svgElement.setAttribute('width', width);
              svgElement.setAttribute('height', 'auto');
            }

            setSvgContent(svgElement.outerHTML);
          } else {
            console.error('No SVG found in response');
          }
        })
        .catch(error => {
          console.error('Error fetching SVG:', error);
        });
    }
  }, [src, width, className]);

  if (!svgContent) {
    // While loading or if there's an error, render the original img
    return <Image src={src} width={width} className={className} alt="" {...props} />;
  }

  // Render the SVG inline
  return <span dangerouslySetInnerHTML={{ __html: svgContent }} {...props} />;
});

InlineSVG.displayName = 'InlineSVG';

export default InlineSVG;