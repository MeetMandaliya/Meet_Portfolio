import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Home = ({ scrollToSection, activeSection }) => {
  const Roles = ["Web Developer."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [navbarColor, setNavbarColor] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarColor("bg-white shadow-xl");
      } else {
        setNavbarColor("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % Roles.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150 - Math.random() * 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, Roles]);

  useEffect(() => {
    if (!reverse && subIndex === Roles[index].length) {
      setTimeout(() => {
        setReverse(true);
      }, 1000);
    }
  }, [subIndex, index, reverse, Roles]);

  function displayNavbar() {
    // console.log("true")
    setShowNavbar(true);
  }

  function closeNavbar() {
    setShowNavbar(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(!window.matchMedia("(min-width: 1024px)").matches);
      setShowNavbar(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // console.log(showNavbar)
  return (
    <>
      <section>
        <div>
          <div className="relative w-[50%] bg-[#ebefff] h-[635px]"></div>
          <div className="">
            <nav
              className={`${
                showNavbar
                  ? `fixed shadow-xl bg-white h-[300px] pb-[20px] z-50 ${navbarColor} top-0 w-screen flex flex-col`
                  : `fixed h-[70px] z-50 ${navbarColor} top-0 w-screen flex justify-between`
              }`}
            >
              <div
                className={`ml-[10%] lg:ml-[10%] m-auto pt-7 w-[100px] sm:w-[120px] !-mt-2`}
              >
                <div onClick={() => scrollToSection("home")} className="cursor-pointer" ><img src={logo} alt="Image" /></div>
              </div>
              <div className="absolute  right-[12%] top-0 ">
                <div
                  className={`${showNavbar ? "block" : "hidden"} pt-[26px]`}
                  onClick={closeNavbar}
                >
                  <i className="text-[20px] fa fa-solid fa-xmark"></i>
                </div>
                <div className={`${showMenu ? "" : "hidden"}`}>
                  <ul
                    className={`${
                      showNavbar && "hidden"
                    } pt-[26px] block lg:hidden`}
                  >
                    <span
                      onClick={displayNavbar}
                      className="h-[15px] flex gap-x-1 mr-[10%]"
                    >
                      <i className="fa mt-[5px] fa-solid fa-bars"></i>
                      <span> MENU </span>
                    </span>
                  </ul>
                </div>
              </div>
              <ul
                className={`${
                  showNavbar
                    ? "flex flex-col pl-[10%] gap-5"
                    : "hidden pt-6 !pb-4 lg:flex gap-12"
                } montserrat_font -pt-[1px] mr-[10%]`}
              >
                <li className="">
                  <a
                    className={`cursor-pointer ${
                      activeSection === "home"
                        ? "active"
                        : "lg:border_effect hover:border-[2px] hover:border-t-0 hover:border-b-blue-700 border-b-[2px] hover:transition-all hover:border-r-0 hover:border-l-0 hover:delay-300 hover:after:w-full border-transparent pb-[5px]"
                    }`}
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={`cursor-pointer ${
                      activeSection === "about"
                        ? "active"
                        : "lg:border_effect hover:border-[2px] hover:border-t-0 hover:border-b-blue-700 border-b-[2px] hover:transition-all hover:border-r-0 hover:border-l-0 hover:delay-300 hover:after:w-full border-transparent pb-[5px]"
                    }`}
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </a>
                </li>
                <li className="">
                  <a
                    className={`cursor-pointer ${
                      activeSection === "resume"
                        ? "active"
                        : "lg:border_effect hover:border-[2px] hover:border-t-0 hover:border-b-blue-700 border-b-[2px] hover:transition-all hover:border-r-0 hover:border-l-0 hover:delay-300 hover:after:w-full border-transparent pb-[5px]"
                    }`}
                    onClick={() => scrollToSection("resume")}
                  >
                    Resume
                  </a>
                </li>
                <li className="">
                  <a
                    className={`cursor-pointer ${
                      activeSection === "projects"
                        ? "active"
                        : "lg:border_effect hover:border-[2px] hover:border-t-0 hover:border-b-blue-700 border-b-[2px] hover:transition-all hover:border-r-0 hover:border-l-0 hover:delay-300 hover:after:w-full border-transparent pb-[5px]"
                    }`}
                    onClick={() => scrollToSection("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li className="">
                  <a
                    className={`cursor-pointer ${
                      activeSection === "contact"
                        ? "active"
                        : "lg:border_effect hover:border-[2px] hover:border-t-0 hover:border-b-blue-700 border-b-[2px] hover:transition-all hover:border-r-0 hover:border-l-0 hover:delay-300 hover:after:w-full border-transparent pb-[5px]"
                    }`}
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="relative">
            <div className="absolute handle_left  sm:right-[60%] md:right-[58%] lg:right-[58%] xl:right-[55%] right-[75%] -top-[240px] sm:-top-[240px]">
              {/* <div className="absolute lg:top-[420px] top-[390px] left-[27%] sm:right-0 sm:top-[420px] sm:left-[34%] xl:top-[420px] md:left-[38%] lg:left-[40%] xl:left-[42%]"> */}
              <div className="relative w-[20px]">
                <div className="w-0 rotate-90 h-0 border-l-[130px] border-l-transparent border-r-transparent border-r-[110px] border-b-[140px] border-b-[#ebefff]"></div>
                <div
                  className="absolute cursor-pointer left-[112px] top-[70px]"
                  onClick={() => scrollToSection("resume")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="24"
                    height="24"
                    className="animate-bounce mx-auto "
                  >
                    <path
                      fill="none"
                      stroke="#595bd4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M32 61l28-28-28 28-28-28"
                    />
                    <line
                      x1="32"
                      y1="0"
                      x2="32"
                      y2="61"
                      fill="none"
                      stroke="#595bd4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute navbar_white z-30 top-[190px] sm:top-[170px] md:top-[200px] w-full">
          <div className="flex flex-col text-center justify-center">
            <h1 className="lg:font-[800] sm:font-[700] font-[600] md:font-[800] text-[#3e64ff] text-[13px] sm:text-[15px] md:text-[16px] tracking-widest">
              HEY! I AM
            </h1>
            <h1 className="lg:font-[800] name_font sm:font-[700] font-[600] md:font-[800] text-[35px] sm:text-[42px] md:text-[45px] lg:text-[50px] xl:text-[60px]">
              MEET MANDALIYA
            </h1>
            <h1 className="lg:font-[800] sm:font-[700] font-[600]  md:font-[800] text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
              I'm a &nbsp;
              <span className="text-rotate text-blue-700 border-transparent border-b-2 border-blue-600">
                {Roles[index].substring(0, subIndex)}
              </span>
              <span className="wrap text-blue-600">|</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
