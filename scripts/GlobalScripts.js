import { useEffect } from 'react';

function GlobalScripts() {
  useEffect(() => {






    
  // Replace SVGs loaded as Images with SVG code 
  // SVGs need class svg-convert - Width needs set in HTML widht="XX" and will be passed as will original classes from <img>
  // Improved accessibility and SEO - reduced HTTP requests - CSS control

function replaceImgWithSVG() {
  document.querySelectorAll('img.svg-convert').forEach(img => {
    const imageUrl = img.src;
    const width = img.getAttribute('width');
    const classes = img.classList; // Capture all classes from the <img> tag

    console.log('Image URL:', imageUrl);
    console.log('Image Width:', width);
    console.log('Image Classes:', classes);

    fetch(imageUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        console.log('SVG Data:', data);
        const container = document.createElement('div');
        container.innerHTML = data;
        const svg = container.querySelector('svg');

        if (svg) {
          console.log('Found SVG:', svg);

          // Add all captured classes to the SVG, except 'svg-convert' which might need special handling
          classes.forEach(cls => {
            if (cls !== 'svg-convert') {
              svg.classList.add(cls);
            }
          });

          // Optionally, add the 'svg-convert' class or any new class specifically for SVGs
          svg.classList.add('svg-converted');

          if (width) {
            svg.setAttribute('width', width);
            svg.setAttribute('height', 'auto'); // Set height to auto for aspect ratio
          }

          // Replace the <img> with the <svg>
          img.parentNode.replaceChild(svg, img);
          console.log('Image replaced with SVG:', img);
        } else {
          console.log('No SVG found in response:', data);
        }
      })
      .catch(error => {
        console.error('Error loading or replacing the SVG:', imageUrl, error);
      });
  });
}


document.addEventListener('DOMContentLoaded', replaceImgWithSVG);

  // Light and Dark Theme
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (!themeToggleBtn || !themeToggleDarkIcon || !themeToggleLightIcon) {
      return;
    }

    const setTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
        localStorage.setItem('color-theme', 'light');
      }
    };

    const currentTheme = localStorage.getItem('color-theme');
    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    const handleThemeToggle = () => {
      const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      setTheme(newTheme);
    };

    themeToggleBtn.addEventListener('click', handleThemeToggle);

    return () => {
      themeToggleBtn.removeEventListener('click', handleThemeToggle);
    };
  }, []);

  return null;
}

export default GlobalScripts;
