import { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsSnapchat } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

// rafce
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const menuOpen = () => {
    setIsopen(!isopen);
  };
  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center
    justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md 
    md:justify-evenly"
    >
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500
      bg-clip-text text-transparent opacity-80 text-3xl font-semibold translate-all
      duration-300 hover:opacity-100"
      >
        Rony
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li
          className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-orange-500 hover:opacity-100"
        >
          <BsGithub />
        </li>
        <li
          className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-blue-500 hover:opacity-100"
        >
          <BsLinkedin />
        </li>
        <li
          className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-pink-500 hover:opacity-100"
        >
          <BsInstagram />
        </li>
        <li
          className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-yellow-300 hover:opacity-100"
        >
          <BsSnapchat />
        </li>
      </ul>

      {isopen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isopen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen
            w-1/2 flex-col items-start justify-start gap-10 border-gray-800
            bg-black/90 p-12 ${isopen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li
              className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-orange-500 hover:opacity-100"
            >
              <a
                href="https://github.com/rohanrony19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>
            <li
              className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-blue-500 hover:opacity-100"
            >
              <a
                href="https://www.linkedin.com/in/rohan-n-prasad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li
              className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-pink-500 hover:opacity-100"
            >
              <a
                href="https://www.instagram.com/_rony__20_?igsh=NW1kOHF3NnQydHB0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li
              className="cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-yellow-300 hover:opacity-100"
            >
              <a
                href="https://www.snapchat.com/add/rony_414?share_id=H-NUIuDrWbQ&locale=en-IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsSnapchat />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
