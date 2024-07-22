import { useState, useEffect } from "react";
import MainMenuLink from "./main-menu-link";

export default function MainMenu({ mainMenuLinks, isMenuActive, inactivateMenu }) {
  const [activeMenuLink, setActiveMenuLink] = useState(mainMenuLinks.length ? mainMenuLinks[0].url : '');

  function highlightLinks() {
    const sections = document.querySelectorAll('.page-scroll');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((currLink) => {
      const val = currLink.getAttribute('href').slice(1);
      if (val[0] !== '#') {
        return;
      }
      const refElement = document.querySelector(val);

      if (!refElement) {
        return;
      }

      const scrollTopMinus = scrollPos + 73;

      if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
        setActiveMenuLink(val);
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', highlightLinks);
    return () => {
      window.removeEventListener('scroll', highlightLinks);
    }
  }, []);

  return (
    <div className={`items-center justify-between ${isMenuActive ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
      <ul className="flex flex-col px-4 space-x-6 lg:space-x-14 font-medium rtl:space-x-reverse md:flex-row md:border-0">
        {mainMenuLinks.map(navLink => (
          <MainMenuLink
            key={navLink.url}
            url={navLink.url}
            label={navLink.label}
            active={navLink.url === activeMenuLink}
            callbackOnClick={inactivateMenu}
            className="block font-semibold uppercase hover:text-color-brand-red md:tracking-tighter lg:tracking-normal"
          />
        ))}
      </ul>
    </div>
  );
}