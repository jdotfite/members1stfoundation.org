import { useEffect, useState, useRef } from "react";
import MainMenuLink from "./main-menu-link";

export default function MainMenu({ mainMenuLinks }) {
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
  };

  useEffect(() => {
    window.addEventListener('scroll', highlightLinks);

    return () => {
      window.removeEventListener('scroll', highlightLinks);
    }
  }, []);

  const [isMenuActive, setMenuActive] = useState(false);
  const menuLinksEl = useRef(null);

  function inactivateMenu() {
    setMenuActive(false);
    if (menuLinksEl.current) {
      menuLinksEl.current.classList.remove('show');
    }
  }

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-color-tone-7 border-b border-gray-200 dark:border-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto py-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
          <svg className="h-11" id="Layer_1" version="1.1" viewBox="0 0 155.1 46.7" x="0" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" y="0">
            <style>
              {`
                .st0 { fill: #ee3129 }
                .st2 { fill: none; stroke: #231f20; stroke-width: .75; stroke-miterlimit: 10 }
                .dark .st2 { stroke: #ddd; }
                .st3 { fill: #fff; }
                .st4 { fill: #23f20; }
                .dark .st4 { fill: #ddd; }
              `}
            </style>
            <path className="st0" d="M63.2 23h.3l.1 2.2h-.5c-.4-1.3-1.3-2-2.5-2-1.8 0-3.1 1.4-3.1 3.4 0 2.1 1.4 3.6 3.2 3.6 1.2 0 2.1-.7 2.7-1.8h.5c-.1.6-.5 1.8-.7 2.3-.2-.1-.4-.1-.8-.1-.6 0-1.2.2-2.2.2-2.6 0-4.6-1.8-4.6-4.1 0-2.4 2.2-4.2 4.9-4.2 1.3 0 2.2.5 2.4.5.2.2.2.1.3 0zM69.7 22.8v.5h-.2c-.7 0-1 .3-1 .9v2h4.2v-2c0-.6-.2-1-.9-1h-.2v-.5h4.1v.5h-.2c-.7 0-1 .3-1 .9v5c0 .6.2.9 1 .9h.2v.5h-4.1V30h.2c.8 0 1-.3 1-1v-2h-4.2v2.3c0 .6.2.9 1 .9h.2v.5h-4.1v-.5h.2c.7 0 1-.3 1-.9v-5.1c0-.6-.2-.9-1-.9h-.2v-.5h4zM82.3 22.6l2.5 6.4c.3.9.7 1.1 1.3 1.1v.5H82v-.5h.4c.6 0 .8-.2.8-.5 0-.2-.1-.3-.7-2h-2.8c-.6 1.7-.7 1.8-.7 2 0 .4.4.5 1.1.5h.2v.5h-3.4v-.5h.2c.7 0 1-.4 1.2-1.2l2.2-6-.1-.4h1.9zm-2.4 4.5h2.2l-1.2-3-1 3zM93.2 27c.9.8 1.4 2 2.4 2.8.4.3.8.5 1.4.5v.5h-.8c-1.9 0-2.5-.3-3.5-1.7-.6-.9-1.1-1.5-1.5-1.8h-1v2c0 .5.2.9 1 .9h.4v.5h-4.4v-.5h.3c.7 0 1-.3 1-.9v-5.1c0-.6-.2-.9-1.1-.9h-.2v-.5l1.8-.1c.9 0 1.5-.1 1.9-.1 1.8 0 2.7.2 3.3.7s.8 1 .8 1.6c.1 1-.6 1.8-1.8 2.1zm-2.9-.1h.5c1.8 0 2.5-.6 2.5-1.8 0-1.4-1-1.8-2.3-1.8h-.6v3.6zM102.1 22.8v.5h-.2c-.8 0-1 .3-1 .9v5.1c0 .6.2.9 1 .9h.2v.5h-4v-.5h.2c.7 0 .9-.3.9-.8v-5.2c0-.6-.2-.9-1-.9h-.1v-.5h4zM103.9 22.6h.4c.2.2.3.2.6.2h6.1c.3 0 .4 0 .6-.2h.4l.2 2.4h-.5c-.2-1.2-.3-1.5-1.3-1.5h-1.6v5.8c0 .7.3.9 1.2.9h.2v.5h-4.6v-.5h.4c.8 0 1-.4 1-.9v-5.8h-1.6c-.9 0-1.1.2-1.3 1.5h-.5l.3-2.4zM118 22.6l2.5 6.4c.3.9.7 1.1 1.3 1.1v.5h-4.1v-.5h.4c.6 0 .8-.2.8-.5 0-.2-.1-.3-.7-2h-2.8c-.6 1.7-.7 1.8-.7 2 0 .4.4.5 1.1.5h.2v.5h-3.4v-.5h.2c.7 0 1-.4 1.2-1.2l2.2-6.1-.1-.4c.1.2 1.9.2 1.9.2zm-2.3 4.5h2.2l-1.2-3-1 3zM129.2 26.2c1.2.3 2 1.1 2 2.2 0 1.4-1.4 2.4-3.2 2.4h-5v-.5c1.1 0 1.5-.2 1.5-1v-4.8c0-.9-.2-1-1-1h-.4V23l1.8-.1c.7 0 1.6-.1 1.9-.1 1.3 0 2.2.1 2.9.5.7.4 1.1 1 1.1 1.6-.1.6-.6 1.1-1.6 1.3zm-2.9-.2h1.1c.6 0 1.5-.2 1.5-1.3 0-1-.6-1.5-1.9-1.5h-.6l-.1 2.8zm0 3.1c0 .8.3 1.1 1.2 1.1 1.1 0 1.8-.6 1.8-1.8 0-1.1-.7-1.9-1.9-1.9h-1l-.1 2.6zM137.1 22.8v.5h-.3c-.8 0-1 .4-1 .9v5.2c0 .4.1.5.6.5h1.7c.9 0 1.2-.5 1.9-1.5h.5l-.9 2.2h-6.8v-.5h.2c.8 0 1.1-.3 1.1-.9v-5.1c0-.6-.3-.9-1-.9h-.2v-.5c-.1.1 4.2.1 4.2.1zM148.5 22.8l.1 1.8h-.5c-.1-.7-.2-1.1-.8-1.1h-2.8v2.9h2.1c.6 0 .9-.2.9-.9h.5V28h-.5c0-.8-.3-.9-1.1-.9h-1.9v2.3c0 .5.1.6.4.6h2.2c.9 0 1.2-.5 1.4-1.3h.5l-.1 2h-7.6v-.5h.5c.6 0 1.1-.2 1.1-.9v-5.1c0-.6-.2-.9-1-.9h-.2v-.5h6.8zM61.9 34.2V36h-.5c0-.9-.3-1.1-.8-1.1h-2.5v2.9H60c.8 0 1.1-.2 1.1-.9h.5v2.5h-.5c0-.7-.3-.9-.8-.9h-2v2.1c0 .8.1 1 .9 1h.2v.5h-3.8v-.5h.2c.6 0 .8-.2.8-.7v-5.2c0-.7-.2-1-.8-1h-.1v-.5h6.2zM68.2 42.2c-2.8 0-4.6-1.7-4.6-4 0-2.5 2-4.3 4.9-4.3 2.7 0 4.5 1.7 4.5 4-.1 2.5-2 4.3-4.8 4.3zm2.8-3.8c0-2.2-1.1-4-3-4-1.6 0-2.7 1.2-2.7 3.2 0 2.4 1.2 4.1 3 4.1s2.7-1.3 2.7-3.3zM77.9 34.2v.5h-.2c-.6 0-.9.3-.9.8v3.9c0 1.3.9 2 2.3 2 1.7 0 2.5-1 2.5-2.3V36c0-.8-.2-1.3-1.1-1.3h-.2v-.5h3.3v.5h-.2c-.8 0-1.1.3-1.1 1V39c0 2.1-1.2 3.3-3.6 3.3-2.4 0-3.7-1.1-3.7-2.9v-3.9c0-.6-.2-.8-.9-.8H74v-.5h3.9zM86.9 34.2l5.2 5.4v-3.9c0-.9-.3-1-1.2-1h-.2v-.5H94v.5h-.2c-.7 0-.9.2-.9.6v6.8h-.7l-6.1-6.4v4.8c0 .8.3 1 1.3 1v.5h-3.1v-.5h.2c.7 0 .9-.3.9-.8v-5.8c-.3-.2-.6-.3-1-.3v-.5c-.1.1 2.5.1 2.5.1zM103.2 40.8c-.8.8-2.1 1.3-4.2 1.3h-4.1v-.5c.9 0 1.2-.2 1.2-.9v-5c0-.8-.2-1-1.2-1v-.5l2.5-.1h1.3c1.7 0 2.7.2 3.4.4 1.4.6 2.3 1.9 2.3 3.5 0 1-.4 2-1.2 2.8zm-5.4-.1c0 .8.2.9 1.1.9 2.3 0 3.6-1.4 3.6-3.5 0-.9-.3-1.9-.9-2.5-.6-.6-1.4-1-2.9-1-.3 0-.6 0-1 .1.1 0 .1 6 .1 6zM110 34l2.5 6.5c.3.9.7 1.1 1.3 1.1v.5h-4.1v-.5h.4c.6 0 .8-.2.8-.5 0-.2-.1-.3-.7-2h-2.8c-.6 1.7-.7 1.8-.7 2 0 .4.4.5 1.1.5h.2v.5h-3.4v-.5h.2c.7 0 1-.4 1.2-1.2l2.2-6-.1-.4h1.9zm-2.3 4.4h2.2l-1.2-3-1 3zM113.9 34h.4c.2.2.3.2.6.2h6.1c.3 0 .4 0 .6-.2h.4l.2 2.4h-.5c-.2-1.2-.3-1.5-1.3-1.5h-1.6v5.8c0 .7.3.9 1.2.9h.2v.4h-4.6v-.5h.4c.8 0 1-.4 1-.9v-5.8h-1.6c-.9 0-1.1.2-1.3 1.5h-.5l.3-2.3zM127.2 34.2v.5h-.2c-.8 0-1 .3-1 .9v5.1c0 .6.2.9 1 .9h.2v.5h-4v-.5h.2c.7 0 .9-.3.9-.8v-5.2c0-.6-.2-.9-1-.9h-.1v-.5h4zM133.1 42.2c-2.8 0-4.6-1.7-4.6-4 0-2.5 2-4.3 4.9-4.3 2.7 0 4.5 1.7 4.5 4 0 2.5-1.9 4.3-4.8 4.3zm2.9-3.8c0-2.2-1.1-4-3-4-1.6 0-2.6 1.2-2.6 3.2 0 2.4 1.2 4.1 3 4.1 1.6 0 2.6-1.3 2.6-3.3zM141.8 34.2l5.2 5.4v-3.9c0-.9-.3-1-1.2-1h-.1v-.5h3.3v.5h-.2c-.7 0-.9.2-.9.6v6.8h-.7l-6.1-6.4v4.8c0 .8.3 1 1.3 1v.5h-3.1v-.5h.1c.7 0 .9-.3.9-.8v-5.8c-.3-.2-.6-.3-1-.3v-.5c-.1.1 2.5.1 2.5.1z">
            </path>
            <path className="st4" d="m57.7 8.6-.4 7.7c-.1 1.4 0 2.1 1.3 2.1v.9h-3.5v-.9c1.2 0 1.3-.5 1.3-2.3l.3-7.8c0-1.1 0-1.6-1.1-1.6v-.9H59l3.1 9.1 3-9.1h3.4v.8c-1.2.1-1.2.1-1.2 1.6l.4 8c.1 1.8.1 2 1.4 2.1v.9h-5v-.9h.3c.7 0 1.2 0 1.2-1.4v-1l-.4-7.7-3.6 10.9h-.4L57.7 8.6zM78 7h-3.5v4.9h2.6c.9 0 1.2-.4 1.2-1.6h.6v4.3h-.6c0-1.2-.2-1.6-1.4-1.6h-2.3v3.9c0 .9.1 1.1.6 1.1h2.7c1 0 1.5-.4 1.8-2.2h.6l-.2 3.4h-9.6v-.9h.7c.9 0 1.2-.5 1.2-1.5V8.2c0-1.2-.3-1.6-1.4-1.6h-.2v-.8h8.7l.2 3.1h-.6C79 7.5 78.8 7 78 7zm5.7 1.6-.4 7.7c-.1 1.4 0 2.1 1.3 2.1v.9h-3.5v-.9c1.2 0 1.3-.5 1.3-2.3l.3-7.8c0-1.1 0-1.6-1-1.6v-.9h3.4l3.1 9.1 3-9.1h3.4v.8c-1.2.1-1.2.1-1.2 1.6l.4 8c.1 1.8.1 2 1.4 2.1v.9h-5v-.9h.3c.7 0 1.2 0 1.2-1.4v-1l-.3-7.7-3.6 10.9h-.4L83.7 8.6zm13.9 0c0-1.7-.2-1.9-1.4-1.9h-.4v-.9c.4 0 1.2-.1 2-.2 1-.1 1.9-.2 2.6-.2 2 0 3.5.3 4.4 1.6.4.5.6 1.3.6 2 0 1.3-.6 2.1-1.9 2.5 1.6.5 2.5 1.9 2.5 3.6 0 2.2-1.5 4.1-4.1 4.1h-6.2v-.9c1.6 0 1.9-.5 1.9-1.8V8.6zm2.2 2.6h1.2c1.6 0 2-1.2 2-2.3 0-1.2-.4-2.6-2.4-2.6-.3 0-.6 0-.8.1v4.8zm0 5.2c0 1.6.4 1.9 1.4 1.9 1.8 0 2.2-1.5 2.2-3 0-1.3-.5-3.2-2.5-3.2-.3 0-.9 0-1.2.1l.1 4.2zM114.1 7h-3.5v4.9h2.6c.9 0 1.2-.4 1.2-1.6h.6v4.3h-.6c0-1.2-.2-1.6-1.4-1.6h-2.3v3.9c0 .9.1 1.1.6 1.1h2.7c1 0 1.5-.4 1.8-2.2h.6l-.2 3.4h-9.6v-.9h.7c.9 0 1.2-.5 1.2-1.5V8.2c0-1.2-.3-1.6-1.4-1.6h-.2v-.8h8.7l.2 3.1h-.6c-.1-1.4-.4-1.9-1.1-1.9zm6.7 9.8c0 1.1.3 1.6 1.2 1.6h.5v.9h-5.6v-.9h.3c1 0 1.4-.3 1.4-1.6V8.3c0-1-.2-1.6-1.3-1.6h-.3v-.9c.8-.1 1.4-.1 2.1-.2.9-.1 2.1-.2 2.6-.2 2.3 0 3.6.4 4.4 1.5.5.7.8 1.6.8 2.5 0 1.6-.9 2.9-2.4 3.5 1 1.2 1.6 2.9 2.8 4.4.7.9 1.1 1.2 2.1 1.3v.9h-1c-2 0-2.8-.4-3.5-1.4-.8-1.1-1.7-3.3-2.8-4.5h-1.2l-.1 3.2zm0-4.2h.6c1.9 0 3-.8 3-3.1s-1.3-3.1-2.8-3.1h-.8v6.2zm9.2 2.7h.6c.5 2.1 1.5 3.2 2.7 3.2 1 0 1.9-.9 1.9-2.1 0-3.2-5.1-3.1-5.1-7.4 0-2.1 1.3-3.5 3.2-3.5 1.2 0 2.2.6 2.4.6.1 0 .2 0 .4-.2h.4l.3 3.5h-.6c-.4-1.7-1.4-2.9-2.6-2.9-.9 0-1.6.7-1.6 1.5 0 2 2.6 2.4 4.4 4.8.7.9.9 1.8.9 2.9 0 2.2-1.5 4-3.4 4-1.3 0-2.4-.7-2.7-.7-.1 0-.3.1-.4.4h-.4l-.4-4.1zm16.9 2.3c0 .6.1 1 .6 1h1v.7h-5.1v-.7h1c.4 0 .5-.4.5-.9V8.2c-.5.4-1.2.9-1.9 1.2l-.2-.7c1.2-.8 2.3-1.9 3.1-3.2h.9l.1 12.1zm2.1-6.5h.3c.1.7.5 1.1 1 1.1.3 0 .5-.3.5-.6 0-.9-1.7-1.2-1.7-2.7 0-1 .6-1.6 1.4-1.6.4 0 .7.1 1 .3v1.3h-.3c-.1-.7-.5-1-.9-1-.2 0-.4.2-.4.5 0 1 1.8 1 1.8 2.8 0 .9-.5 1.6-1.2 1.6-.6 0-.9-.2-1-.2 0 0-.1 0-.2.1h-.3v-1.6zm4.9 0c0 .5.1.7.4.7.2 0 .4-.2.7-.6l.1.4c-.3.7-.8 1.1-1.3 1.1-.6 0-1-.5-1-1.6v-3h-.5v-.3c.5-.3 1.2-1.2 1.4-1.9h.3v1.6h1.2l-.1.7H154l-.1 2.9z"></path>
          <path className="st2" d="M55.1.6h100M55.1 46.2h100"></path>
          <path className="st0" d="M0 .6h46.8v45.7H0z"></path>
          <path className="st3" d="M37.3 36c-.1 0-.2-.1-.2-.1H37c-.1 0-.2-.1-.2-.2-.3-.2-.5-.6-.5-1V10.1c0-.2-.1-.3-.3-.3h-4.2c-.2 0-.4.1-.5.3l-2.7 5.4c0 .1 0 .2.1.2h1.8c.4 0 .7.3.7.7v18.3c0 .4-.2.8-.5 1-.1.1-.2.1-.2.2h-.1c-.1 0-.2.1-.2.1h-.1v.8h7.4l-.2-.8c.1 0 .1 0 0 0z"></path>
          <path className="st3" d="m27.8 21.5-3.5 7.1-2 4.1-1.3-2.2-.3-.5-3.2-5.5-3.5-5.8v-.1c-.1 0-.1 0-.1.1v15.8c0 .4.2.8.5 1 .2.2.4.3.7.3v.9H7.8V36c.1-.1.3-.1.4-.2.1-.1.3-.2.4-.3.2-.2.3-.4.3-.7V11.7c0-.4-.1-.6-.4-.8-.2-.2-.4-.3-.6-.4h-.2v-.7h6.6c.4 0 .8.2.9.6l4.1 7 .4.6 4 6.9 3-6.1c.1-.1.2-.2.3-.2h2c.1 0 .2.1.1.2M39.4 13.3c-.1-.1-.2-.1-.3-.2-.1-.1-.2-.1-.3-.2-.1-.1-.2-.1-.3-.1-.1 0-.2-.1-.2-.1l-.1-.1v-.2c0-.1 0-.2.1-.3s.2-.1.4-.1.3.1.5.2.2.3.3.5h.2v-1.1h-.2l-.1.2c-.1 0-.2-.1-.3-.1-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7 0 .1 0 .3.1.4s.1.2.2.3c.1.1.2.1.3.2.1.1.2.1.3.1.1 0 .2.1.3.1s.2.1.2.1.1.1.1.2v.2c0 .2 0 .3-.1.4-.1.1-.2.1-.4.1-.1 0-.2 0-.3-.1s-.2-.1-.3-.2c-.1-.1-.1-.2-.2-.3 0-.1-.1-.2-.1-.3h-.2v1.1h.3v-.2c.1.1.2.1.3.2.1.1.3.1.5.1.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.1 0-.3-.1-.4-.2-.2-.3-.2-.4-.3M41.9 14.4h-.4c-.1 0-.2 0-.2-.1s-.1-.1-.1-.1c0-.1 0-.1-.1-.2v-2h.8v-.4H41v-1h-.6v1h-.5v.4h.5v2.1c0 .2 0 .4.2.6.1.1.3.2.5.2s.3 0 .4-.1c.1 0 .2-.1.4-.1v-.3zM40.6 34.2c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3zm0 .2c-.6 0-1 .5-1 1.1 0 .6.5 1.1 1 1.1.6 0 1-.5 1-1.1.1-.6-.4-1.1-1-1.1zm-.2 1.9h-.2v-1.5h.4c.2 0 .4 0 .5.1.1.1.1.2.1.3 0 .2-.1.3-.3.3.1 0 .2.1.2.3 0 .2.1.3.1.4H41s-.1-.2-.1-.4-.1-.3-.3-.3h-.2v.8zm0-.8h.2c.2 0 .3-.1.3-.2s-.1-.2-.3-.2h-.2v.4z"></path>
        </svg>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="bg-gray-200 dark:bg-gray-800 p-2.5 focus:outline-none transition duration-300 ease-in-out mr-4" id="theme-toggle" type="button">
            <svg className="w-5 h-5" fill="currentColor" id="theme-toggle-dark-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg className="w-5 h-5 hidden" fill="currentColor" id="theme-toggle-light-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Theme Toggle</title>
              <path clipRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd"></path>
            </svg>
          </button>

          <a href="#" className="btn btn-outline" type="btn">Donate</a>
          <button aria-controls="navbar-sticky" aria-expanded="false"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-red-700 dark:focus:ring-gray-600"
            data-collapse-toggle="navbar-sticky" type="button">
            <span className="sr-only">Open main menu</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
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
      </div>
    </nav>
  );
}
