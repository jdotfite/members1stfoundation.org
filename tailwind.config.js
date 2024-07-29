/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Add this line
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}',  // Include all files in the components directory
  ],
  theme: {
    // Modified container class to center and add resonsive left/right padding
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',     // Default padding
        sm: '1.5rem',        // Padding for sm breakpoints
        md: '2rem',          // Padding for md breakpoints
        lg: '2.5rem',        // Padding for lg breakpoints
        xl: '3rem'           // Padding for xl breakpoints
      }
    },
    extend: {
      spacing: {
        '4.5': '1.125rem', // Assuming 1 rem is 16px, 1.125 rem would be 18px
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '20': '5rem'
      },
      fontFamily: {
        'primary': ['var(--font-primary)', 'sans-serif'],
        'secondary': ['var(--font-secondary)', 'sans-serif']
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '3.5xl': '2rem', // Example size, adjust as needed
        '4.5xl': '2.5rem' // Example size, adjust as needed
      },
      colors: {
        'brand-yellow': 'var(--color-brand-yellow)',
        'brand-red': 'var(--color-brand-red)',
        'brand-dark-blue': 'var(--color-brand-dark-blue)',

        'text-primary': 'var(--text-primary)',
        'color-global-white': 'var(--color-global-white)',

        'color-brand-yellow': 'var(--color-brand-yellow)',
        'color-brand-red': 'var(--color-brand-red)',

        'color-tone-1': 'var(--color-tone-1)',
        'color-tone-2': 'var(--color-tone-2)',
        'color-tone-3': 'var(--color-tone-3)',
        'color-tone-4': 'var(--color-tone-4)',
        'color-tone-5': 'var(--color-tone-5)',
        'color-tone-6': 'var(--color-tone-6)',
        'color-tone-7': 'var(--color-tone-7)',
      
        'btn-outline-primary-text': 'var(--color-btn-outline-text)',
        'btn-outline-primary-text-hover': 'var(--color-btn-outline-text-hover)',
        'btn-outline-primary-border': 'var(--color-btn-outline-primary-border)',
        'btn-outline-primary-border-hover': 'var(--color-btn-outline-primary-border-hover)',
        'btn-outline-primary-background': 'var(--color-btn-outline-primary-background)',
        'btn-outline-primary-background-hover': 'var(--color-btn-outline-primary-background-hover)',
   
        'color-primary-onBackground': 'var(--color-primary-onBackground)',
        'color-primary-onBackground-hover': 'var(--color-primary-onBackground-background-hover)',
        'color-primary-onBackground-border': 'var(--color-primary-onBackground-border)',
        'color-primary-onBackground-border-hover': 'var(--color-primary-onBackground-border-hover)',
        'color-primary-onBackground-background': 'var(--color-primary-background)',
        'color-primary-onBackground-background-hover': 'var(--color-primary-background-hover)',

        'color-primary-onBackground-selected': 'var(--color-primary-onBackground-selected)',
        
        'color-primary': 'var(--color-primary)',
        'color-primary-hover': 'var(--color-primary-hover)',
        'color-primary-visited': 'var(--color-primary-visited)',
        'color-primary-border': 'var(--color-primary-border)',
        'color-primary-border-hover': 'var(--color-primary-border-hover)',
       
        'color-primary-background': 'var(--color-primary-background)',
        'color-primary-background-hover': 'var(--color-primary-background-hover)',
       
        'color-primary-background-selected': 'var(--color-primary-background-selected)',
        'color-secondary': 'var(--color-secondary)',
        'color-secondary-hover': 'var(--color-secondary-hover)',
        'color-secondary-weak': 'var(--color-secondary-weak)',
        'color-secondary-onBackground': 'var(--color-secondary-onBackground)',
        'color-secondary-background': 'var(--color-secondary-background)',
        'color-secondary-background-hover': 'var(--color-secondary-background-hover)',
        'color-secondary-background-selected': 'var(--color-secondary-background-selected)',
        'color-secondary-plain': 'var(--color-secondary-plain)',
        'color-secondary-plain-hover': 'var(--color-secondary-plain-hover)',

        'm1-red': '#ee3129',
        'm1-blue-dark': '#213d70',
        'almost-black': '#121212',
        'weak-black': '#212121',
        'ui-btn-red': '#902121',
        'ui-link-red': '#ed7e7e',
        'hover-red': '#ed4840'
      },
      // Extend other styles as needed
    },
  },
  plugins: [],
  safelist: [
    'mt-19', // Include specific mt class
    {
      pattern: /^(bg|text|border)-brand-/, // Include all bg-brand-* and text-brand-* classes
      variants: ['hover', 'focus', 'active'], // Include variants if needed
    },
  ],
}
