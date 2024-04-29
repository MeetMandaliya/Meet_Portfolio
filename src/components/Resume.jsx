import React, { useState, useRef, useEffect } from "react";

const Resume = () => {
  
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const circumference = 2 * Math.PI * 40;
  
  const sectionRefs = {
    education: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <section className={`z-20 ${isVisible ? "opacity-100" : "opacity-100"}`}>
        <div className="flex flex-col sm:flex-row pt-[50px]">
          <div className="sm:hidden block m-auto w-full">
            <h1 className="text-[40px] pt-[50px] text-center">Resume</h1>
          </div>
          <div
            ref={sectionRef}
            className={`${
              isVisible ? "opacity-100" : "opacity-100"
            } sm:w-4/12 sm:sticky sm:top-[90px] mb-[20%] sm:h-full h-[10%] w-4/12 sm:mt-[70px] ml-[10%] `}
          >
            <div className="sm:h-full p-4 pl-0 pr-0">
              <ul className="font-[600]">
                <li
                  onClick={() => scrollToSection("education")}
                  className={`mt-[15px] cursor-pointer ${
                    activeSection === "education" && "text-blue-800"
                  }`}
                >
                  <span className="flex font-[700]">
                    {activeSection === "education" && (
                      <>
                        <svg
                          version="1.1"
                          className="w-[30px] h-[20px]"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 290.66 290.66"
                          xmlSpace="preserve"
                          fill="#0e00d6"
                          stroke="#0e00d6"
                          strokeWidth="3.557108000000001"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <g>
                                <rect
                                  y="139.474"
                                  style={{ fill: "#0e00d6" }}
                                  width="290.658"
                                  height="11.711"
                                ></rect>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </>
                    )}
                    Education
                  </span>
                </li>

                <li
                  onClick={() => scrollToSection("skills")}
                  className={`mt-[15px] cursor-pointer ${
                    activeSection === "skills" && "text-blue-800"
                  } `}
                >
                  <span className="flex font-[700]">
                    {activeSection === "skills" && (
                      <>
                        <svg
                          version="1.1"
                          className="w-[30px] h-[20px]"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 290.66 290.66"
                          xmlSpace="preserve"
                          fill="#0e00d6"
                          stroke="#0e00d6"
                          strokeWidth="7.557108000000001"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <g>
                                <rect
                                  y="139.474"
                                  style={{ fill: "#0e00d6" }}
                                  width="290.658"
                                  height="11.711"
                                ></rect>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </>
                    )}
                    Skills
                  </span>
                </li>
                <li
                  onClick={() => scrollToSection("experience")}
                  className={`mt-[15px] cursor-pointer ${
                    activeSection === "experience" && "text-blue-800"
                  }`}
                >
                  <span className="flex font-[700]">
                    {activeSection === "experience" && (
                      <>
                        <svg
                          version="1.1"
                          className="w-[30px] h-[20px]"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 290.66 290.66"
                          xmlSpace="preserve"
                          fill="#0e00d6"
                          stroke="#0e00d6"
                          strokeWidth="7.557108000000001"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <g>
                                <rect
                                  y="139.474"
                                  style={{ fill: "#0e00d6" }}
                                  width="290.658"
                                  height="11.711"
                                ></rect>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </>
                    )}
                    Experience
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={` flex flex-col sm:pl-[0px] padding_left pl-[10%] padding_right pr-[10%] w-full`}
          >
            <div ref={sectionRefs.education} id="education">
              <div className="sm:p-4 p-0 pr-0">
                <h1 className="text-[30px] mt-[80px] sm:mt-[76px] font-[800] text-blue-700">
                  Education
                </h1>
                <div>
                  <p className=" text-[18px] text-justify mt-[20px]">
                    I am currently in my final year at Silver Oak University,
                    where I am pursuing a degree in Computer Science &
                    Engineering with Cyber Security. Prior to this, I
                    successfully completed my Secondary School Certificate (SSC)
                    and Higher Secondary Certificate (HSC) board exams, which
                    laid the foundation for my academic journey. Throughout my
                    education, I have actively engaged in learning and acquiring
                    practical skills in the field of technology.
                  </p>
                </div>
                <div className="pt-[20px] ">
                  <div
                    className={`flex-row flex  sm:gap-x-6 gap-x-3  gap-y-6  mt-[30px] ${
                      isVisible
                        ? "translate-y-0"
                        : "translate-y-10 delay-400 opacity-100"
                    }`}
                  >
                    <div className="flex flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:w-[60px] w-[45px] sm:h-[60px] h-[45px] pl-1 pr-1 rounded-full border p-2 bg-blue-800 text-white  "
                        viewBox="0 0 118 118"
                        id="school"
                      >
                        <g fill="#ffffff" className="color000000 svgShape">
                          <path
                            d="M78.35,97.74 C77.7977153,97.74 77.35,97.2922847 77.35,96.74 L77.35,33.29 L40.67,33.29 L40.67,54.6 C40.67,55.1522847 40.2222847,55.6 39.67,55.6 C39.1177153,55.6 38.67,55.1522847 38.67,54.6 L38.67,32.29 C38.67,31.7377153 39.1177153,31.29 39.67,31.29 L78.35,31.29 C78.9022847,31.29 79.35,31.7377153 79.35,32.29 L79.35,96.75 C79.344516,97.2983755 78.898403,97.7400274 78.35,97.74 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M39.67 97.74C39.1177153 97.74 38.67 97.2922847 38.67 96.74L38.67 52.54C38.67 51.9877153 39.1177153 51.54 39.67 51.54 40.2222847 51.54 40.67 51.9877153 40.67 52.54L40.67 96.74C40.67 97.2922847 40.2222847 97.74 39.67 97.74zM36 49.86L1 49.86C.44771525 49.86 0 49.4122847 0 48.86L0 39.65C0 39.0977153.44771525 38.65 1 38.65L36 38.65C36.5522847 38.65 37 39.0977153 37 39.65 37 40.2022847 36.5522847 40.65 36 40.65L2 40.65 2 47.86 36 47.86C36.5522847 47.86 37 48.3077153 37 48.86 37 49.4122847 36.5522847 49.86 36 49.86zM117 49.86L82 49.86C81.4477153 49.86 81 49.4122847 81 48.86 81 48.3077153 81.4477153 47.86 82 47.86L116 47.86 116 40.65 82 40.65C81.4477153 40.65 81 40.2022847 81 39.65 81 39.0977153 81.4477153 38.65 82 38.65L117 38.65C117.552285 38.65 118 39.0977153 118 39.65L118 48.86C118 49.4122847 117.552285 49.86 117 49.86zM78.35 33.29L39.67 33.29C39.2314435 33.2866147 38.8462695 32.997868 38.7200369 32.5778578 38.5938043 32.1578475 38.7559742 31.7045986 39.12 31.46L58.46 18.56C58.7960369 18.3358005 59.2339631 18.3358005 59.57 18.56L78.9 31.45C79.2640258 31.6945986 79.4261957 32.1478475 79.2999631 32.5678578 79.1737305 32.987868 78.7885565 33.2766147 78.35 33.28L78.35 33.29zM43 31.29L75 31.29 59 20.6 43 31.29z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M28.62 112.48L5.62 112.48C4.05151131 112.48 2.78 111.208489 2.78 109.64L2.78 48.86C2.78 48.3077153 3.22771525 47.86 3.78 47.86L36 47.86C36.5522847 47.86 37 48.3077153 37 48.86 37 49.4122847 36.5522847 49.86 36 49.86L4.76 49.86 4.76 109.63C4.76 109.852782 4.84849975 110.066439 5.0060303 110.22397 5.16356086 110.3815 5.37721815 110.47 5.6 110.47L28.6 110.47C29.1522847 110.47 29.6 110.917715 29.6 111.47 29.6 112.022285 29.1522847 112.47 28.6 112.47L28.62 112.48zM112.42 112.48L89.42 112.48C88.8677153 112.48 88.42 112.032285 88.42 111.48 88.42 110.927715 88.8677153 110.48 89.42 110.48L112.42 110.48C112.883919 110.48 113.26 110.103919 113.26 109.64L113.26 49.86 82 49.86C81.4477153 49.86 81 49.4122847 81 48.86 81 48.3077153 81.4477153 47.86 82 47.86L114.23 47.86C114.782285 47.86 115.23 48.3077153 115.23 48.86L115.23 109.63C115.235583 111.190742 113.980666 112.463523 112.42 112.48z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M25.86,86.56 L16.65,86.56 C16.0977153,86.56 15.65,86.1122847 15.65,85.56 L15.65,63.46 C15.65,62.9077153 16.0977153,62.46 16.65,62.46 L25.86,62.46 C26.4122847,62.46 26.86,62.9077153 26.86,63.46 L26.86,85.56 C26.86,86.1122847 26.4122847,86.56 25.86,86.56 Z M17.65,84.56 L24.86,84.56 L24.86,64.46 L17.65,64.46 L17.65,84.56 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M25.86 75.51L16.65 75.51C16.0977153 75.51 15.65 75.0622847 15.65 74.51 15.65 73.9577153 16.0977153 73.51 16.65 73.51L25.86 73.51C26.4122847 73.51 26.86 73.9577153 26.86 74.51 26.86 75.0622847 26.4122847 75.51 25.86 75.51zM101.37 86.56L92.16 86.56C91.6077153 86.56 91.16 86.1122847 91.16 85.56L91.16 63.46C91.16 62.9077153 91.6077153 62.46 92.16 62.46L101.37 62.46C101.922285 62.46 102.37 62.9077153 102.37 63.46L102.37 85.56C102.37 86.1122847 101.922285 86.56 101.37 86.56zM93.16 84.56L100.37 84.56 100.37 64.46 93.16 64.46 93.16 84.56z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M101.37 75.51L92.16 75.51C91.6077153 75.51 91.16 75.0622847 91.16 74.51 91.16 73.9577153 91.6077153 73.51 92.16 73.51L101.37 73.51C101.922285 73.51 102.37 73.9577153 102.37 74.51 102.37 75.0622847 101.922285 75.51 101.37 75.51zM59 58.15C53.8692747 58.15 49.71 53.9907253 49.71 48.86 49.71 43.7292747 53.8692747 39.57 59 39.57 64.1307253 39.57 68.29 43.7292747 68.29 48.86 68.2844885 53.9884407 64.1284407 58.1444885 59 58.15zM59 41.58C54.9738442 41.58 51.71 44.8438442 51.71 48.87 51.71 52.8961558 54.9738442 56.16 59 56.16 63.0261558 56.16 66.29 52.8961558 66.29 48.87 66.2900038 44.8422233 63.0277729 41.5755175 59 41.57L59 41.58z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M62.69 49.86L59 49.86C58.4477153 49.86 58 49.4122847 58 48.86L58 44.26C58 43.7077153 58.4477153 43.26 59 43.26 59.5522847 43.26 60 43.7077153 60 44.26L60 47.86 62.68 47.86C63.2322847 47.86 63.68 48.3077153 63.68 48.86 63.68 49.4122847 63.2322847 49.86 62.68 49.86L62.69 49.86zM59 20.4C58.4477153 20.4 58 19.9522847 58 19.4L58 1C58 .44771525 58.4477153 0 59 0 59.5522847 0 60 .44771525 60 1L60 19.4C60 19.9522847 59.5522847 20.4 59 20.4z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M71.9 13L59 13C58.4477153 13 58 12.5522847 58 12L58 2.82C58 2.26771525 58.4477153 1.82 59 1.82L71.9 1.82C72.2702114 1.81944166 72.6104396 2.02346072 72.7843306 2.35029204 72.9582216 2.67712336 72.937319 3.07328252 72.73 3.38L70.35 6.91 72.79 11.56C72.9412535 11.8686661 72.9233761 12.2333823 72.7426604 12.5257762 72.5619447 12.8181702 72.2437221 12.9972563 71.9 13zM60 11L70.25 11 68.3 7.31C68.1395542 6.98995823 68.162438 6.6085613 68.36 6.31L70 3.82 60 3.82 60 11zM69.14 101.43L48.88 101.43C48.3277153 101.43 47.88 100.982285 47.88 100.43L47.88 79C47.88 77.044912 49.464912 75.46 51.42 75.46L66.6 75.46C68.555088 75.46 70.14 77.044912 70.14 79L70.14 100.4C70.1481149 100.670375 70.0463515 100.932505 69.8579284 101.126581 69.6695053 101.320657 69.4104971 101.430122 69.14 101.43zM49.88 99.43L68.14 99.43 68.14 79C68.14 78.1494815 67.4505185 77.46 66.6 77.46L51.42 77.46C50.5694815 77.46 49.88 78.1494815 49.88 79L49.88 99.43z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M78.35,107 L39.67,107 C39.1177153,107 38.67,106.552285 38.67,106 L38.67,100.48 C38.67,99.9277153 39.1177153,99.48 39.67,99.48 L78.35,99.48 C78.9022847,99.48 79.35,99.9277153 79.35,100.48 L79.35,106 C79.35,106.552285 78.9022847,107 78.35,107 Z M40.68,105 L77.35,105 L77.35,101.48 L40.67,101.48 L40.68,105 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M83,112.48 L35.07,112.48 C34.5177153,112.48 34.07,112.032285 34.07,111.48 L34.07,106 C34.07,105.447715 34.5177153,105 35.07,105 L83,105 C83.5522847,105 84,105.447715 84,106 L84,111.52 C83.9785188,112.056604 83.5370335,112.48043 83,112.48 Z M36.12,110.48 L82,110.48 L82,107 L36.07,107 L36.12,110.48 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M85.71,118 L32.31,118 C31.7577153,118 31.31,117.552285 31.31,117 L31.31,111.48 C31.31,110.927715 31.7577153,110.48 32.31,110.48 L85.71,110.48 C86.2622847,110.48 86.71,110.927715 86.71,111.48 L86.71,117 C86.71,117.552285 86.2622847,118 85.71,118 Z M33.3,116 L84.71,116 L84.71,112.48 L33.31,112.48 L33.3,116 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h1 className="font-[600] text-blue-600 mt-[5px]">
                        2017-2018
                      </h1>

                      <h1 className="font-[700] sm:text-[24px] text-[16px]">
                        Tanna Educational Campus
                      </h1>
                      <div className="col-md-6 mt-[20px]">
                        <div className="flex justify-between">
                          <h1>SSC</h1>
                          <h1>81%</h1>
                        </div>
                        <progress
                          value={81}
                          max="100"
                          className="progress-custom border rounded-full w-full h-2"
                        ></progress>
                      </div>
                    </div>
                  </div>
                  <hr className="h-[2px] text-[#e5e5e5] mt-[30px] " />
                  <div className="flex flex-row sm:gap-x-6 gap-x-3  gap-y-6  mt-[30px]">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:w-[60px] w-[45px] sm:h-[60px] h-[45px] pl-1 pr-1 rounded-full border p-2 bg-blue-800 text-white  "
                        viewBox="0 0 118 118"
                        id="school"
                      >
                        <g fill="#ffffff" className="color000000 svgShape">
                          <path
                            d="M78.35,97.74 C77.7977153,97.74 77.35,97.2922847 77.35,96.74 L77.35,33.29 L40.67,33.29 L40.67,54.6 C40.67,55.1522847 40.2222847,55.6 39.67,55.6 C39.1177153,55.6 38.67,55.1522847 38.67,54.6 L38.67,32.29 C38.67,31.7377153 39.1177153,31.29 39.67,31.29 L78.35,31.29 C78.9022847,31.29 79.35,31.7377153 79.35,32.29 L79.35,96.75 C79.344516,97.2983755 78.898403,97.7400274 78.35,97.74 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M39.67 97.74C39.1177153 97.74 38.67 97.2922847 38.67 96.74L38.67 52.54C38.67 51.9877153 39.1177153 51.54 39.67 51.54 40.2222847 51.54 40.67 51.9877153 40.67 52.54L40.67 96.74C40.67 97.2922847 40.2222847 97.74 39.67 97.74zM36 49.86L1 49.86C.44771525 49.86 0 49.4122847 0 48.86L0 39.65C0 39.0977153.44771525 38.65 1 38.65L36 38.65C36.5522847 38.65 37 39.0977153 37 39.65 37 40.2022847 36.5522847 40.65 36 40.65L2 40.65 2 47.86 36 47.86C36.5522847 47.86 37 48.3077153 37 48.86 37 49.4122847 36.5522847 49.86 36 49.86zM117 49.86L82 49.86C81.4477153 49.86 81 49.4122847 81 48.86 81 48.3077153 81.4477153 47.86 82 47.86L116 47.86 116 40.65 82 40.65C81.4477153 40.65 81 40.2022847 81 39.65 81 39.0977153 81.4477153 38.65 82 38.65L117 38.65C117.552285 38.65 118 39.0977153 118 39.65L118 48.86C118 49.4122847 117.552285 49.86 117 49.86zM78.35 33.29L39.67 33.29C39.2314435 33.2866147 38.8462695 32.997868 38.7200369 32.5778578 38.5938043 32.1578475 38.7559742 31.7045986 39.12 31.46L58.46 18.56C58.7960369 18.3358005 59.2339631 18.3358005 59.57 18.56L78.9 31.45C79.2640258 31.6945986 79.4261957 32.1478475 79.2999631 32.5678578 79.1737305 32.987868 78.7885565 33.2766147 78.35 33.28L78.35 33.29zM43 31.29L75 31.29 59 20.6 43 31.29z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M28.62 112.48L5.62 112.48C4.05151131 112.48 2.78 111.208489 2.78 109.64L2.78 48.86C2.78 48.3077153 3.22771525 47.86 3.78 47.86L36 47.86C36.5522847 47.86 37 48.3077153 37 48.86 37 49.4122847 36.5522847 49.86 36 49.86L4.76 49.86 4.76 109.63C4.76 109.852782 4.84849975 110.066439 5.0060303 110.22397 5.16356086 110.3815 5.37721815 110.47 5.6 110.47L28.6 110.47C29.1522847 110.47 29.6 110.917715 29.6 111.47 29.6 112.022285 29.1522847 112.47 28.6 112.47L28.62 112.48zM112.42 112.48L89.42 112.48C88.8677153 112.48 88.42 112.032285 88.42 111.48 88.42 110.927715 88.8677153 110.48 89.42 110.48L112.42 110.48C112.883919 110.48 113.26 110.103919 113.26 109.64L113.26 49.86 82 49.86C81.4477153 49.86 81 49.4122847 81 48.86 81 48.3077153 81.4477153 47.86 82 47.86L114.23 47.86C114.782285 47.86 115.23 48.3077153 115.23 48.86L115.23 109.63C115.235583 111.190742 113.980666 112.463523 112.42 112.48z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M25.86,86.56 L16.65,86.56 C16.0977153,86.56 15.65,86.1122847 15.65,85.56 L15.65,63.46 C15.65,62.9077153 16.0977153,62.46 16.65,62.46 L25.86,62.46 C26.4122847,62.46 26.86,62.9077153 26.86,63.46 L26.86,85.56 C26.86,86.1122847 26.4122847,86.56 25.86,86.56 Z M17.65,84.56 L24.86,84.56 L24.86,64.46 L17.65,64.46 L17.65,84.56 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M25.86 75.51L16.65 75.51C16.0977153 75.51 15.65 75.0622847 15.65 74.51 15.65 73.9577153 16.0977153 73.51 16.65 73.51L25.86 73.51C26.4122847 73.51 26.86 73.9577153 26.86 74.51 26.86 75.0622847 26.4122847 75.51 25.86 75.51zM101.37 86.56L92.16 86.56C91.6077153 86.56 91.16 86.1122847 91.16 85.56L91.16 63.46C91.16 62.9077153 91.6077153 62.46 92.16 62.46L101.37 62.46C101.922285 62.46 102.37 62.9077153 102.37 63.46L102.37 85.56C102.37 86.1122847 101.922285 86.56 101.37 86.56zM93.16 84.56L100.37 84.56 100.37 64.46 93.16 64.46 93.16 84.56z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M101.37 75.51L92.16 75.51C91.6077153 75.51 91.16 75.0622847 91.16 74.51 91.16 73.9577153 91.6077153 73.51 92.16 73.51L101.37 73.51C101.922285 73.51 102.37 73.9577153 102.37 74.51 102.37 75.0622847 101.922285 75.51 101.37 75.51zM59 58.15C53.8692747 58.15 49.71 53.9907253 49.71 48.86 49.71 43.7292747 53.8692747 39.57 59 39.57 64.1307253 39.57 68.29 43.7292747 68.29 48.86 68.2844885 53.9884407 64.1284407 58.1444885 59 58.15zM59 41.58C54.9738442 41.58 51.71 44.8438442 51.71 48.87 51.71 52.8961558 54.9738442 56.16 59 56.16 63.0261558 56.16 66.29 52.8961558 66.29 48.87 66.2900038 44.8422233 63.0277729 41.5755175 59 41.57L59 41.58z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M62.69 49.86L59 49.86C58.4477153 49.86 58 49.4122847 58 48.86L58 44.26C58 43.7077153 58.4477153 43.26 59 43.26 59.5522847 43.26 60 43.7077153 60 44.26L60 47.86 62.68 47.86C63.2322847 47.86 63.68 48.3077153 63.68 48.86 63.68 49.4122847 63.2322847 49.86 62.68 49.86L62.69 49.86zM59 20.4C58.4477153 20.4 58 19.9522847 58 19.4L58 1C58 .44771525 58.4477153 0 59 0 59.5522847 0 60 .44771525 60 1L60 19.4C60 19.9522847 59.5522847 20.4 59 20.4z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M71.9 13L59 13C58.4477153 13 58 12.5522847 58 12L58 2.82C58 2.26771525 58.4477153 1.82 59 1.82L71.9 1.82C72.2702114 1.81944166 72.6104396 2.02346072 72.7843306 2.35029204 72.9582216 2.67712336 72.937319 3.07328252 72.73 3.38L70.35 6.91 72.79 11.56C72.9412535 11.8686661 72.9233761 12.2333823 72.7426604 12.5257762 72.5619447 12.8181702 72.2437221 12.9972563 71.9 13zM60 11L70.25 11 68.3 7.31C68.1395542 6.98995823 68.162438 6.6085613 68.36 6.31L70 3.82 60 3.82 60 11zM69.14 101.43L48.88 101.43C48.3277153 101.43 47.88 100.982285 47.88 100.43L47.88 79C47.88 77.044912 49.464912 75.46 51.42 75.46L66.6 75.46C68.555088 75.46 70.14 77.044912 70.14 79L70.14 100.4C70.1481149 100.670375 70.0463515 100.932505 69.8579284 101.126581 69.6695053 101.320657 69.4104971 101.430122 69.14 101.43zM49.88 99.43L68.14 99.43 68.14 79C68.14 78.1494815 67.4505185 77.46 66.6 77.46L51.42 77.46C50.5694815 77.46 49.88 78.1494815 49.88 79L49.88 99.43z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M78.35,107 L39.67,107 C39.1177153,107 38.67,106.552285 38.67,106 L38.67,100.48 C38.67,99.9277153 39.1177153,99.48 39.67,99.48 L78.35,99.48 C78.9022847,99.48 79.35,99.9277153 79.35,100.48 L79.35,106 C79.35,106.552285 78.9022847,107 78.35,107 Z M40.68,105 L77.35,105 L77.35,101.48 L40.67,101.48 L40.68,105 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M83,112.48 L35.07,112.48 C34.5177153,112.48 34.07,112.032285 34.07,111.48 L34.07,106 C34.07,105.447715 34.5177153,105 35.07,105 L83,105 C83.5522847,105 84,105.447715 84,106 L84,111.52 C83.9785188,112.056604 83.5370335,112.48043 83,112.48 Z M36.12,110.48 L82,110.48 L82,107 L36.07,107 L36.12,110.48 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                          <path
                            d="M85.71,118 L32.31,118 C31.7577153,118 31.31,117.552285 31.31,117 L31.31,111.48 C31.31,110.927715 31.7577153,110.48 32.31,110.48 L85.71,110.48 C86.2622847,110.48 86.71,110.927715 86.71,111.48 L86.71,117 C86.71,117.552285 86.2622847,118 85.71,118 Z M33.3,116 L84.71,116 L84.71,112.48 L33.31,112.48 L33.3,116 Z"
                            fill="#ffffff"
                            className="color000000 svgShape"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h1 className="font-[600] text-blue-600 mt-[5px]">
                        2019-2020
                      </h1>
                      <h1 className="font-[700] sm:text-[24px] text-[16px]">
                        BAPS Swaminarayan Vidyamandir
                      </h1>
                      <div className="col-md-6 mt-[20px]">
                        <div className="flex justify-between">
                          <h1>HSC</h1>
                          <h1>65%</h1>
                        </div>
                        <progress
                          value={65}
                          max="100"
                          className="progress-custom border rounded-full w-full h-2"
                        ></progress>
                      </div>
                    </div>
                  </div>
                  <hr className="h-[2px] text-[#e5e5e5] mt-[30px] " />
                  <div className=" sm:gap-x-6 gap-x-3  gap-y-6  mt-[30px] flex flex-row">
                    <div className="">
                      <svg
                        fill="#ffffff"
                        className="sm:w-[60px] w-[45px] sm:h-[60px] h-[45px] pl-1 pr-1 rounded-full border p-2 bg-blue-800 text-white  "
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512.001 512.001"
                        xmlSpace="preserve"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <g>
                                <rect
                                  x="0"
                                  y="496.188"
                                  width="512.001"
                                  height="15.75"
                                ></rect>
                                <polygon points="399.875,488.062 399.875,248.187 112.125,248.187 112.125,488.062 127.875,488.062 127.875,263.937 384.125,263.937 384.125,488.062 "></polygon>
                                <polygon points="176,287.937 176,272.187 144,272.187 144,287.937 152.125,287.937 152.125,472.188 144,472.188 144,487.938 176,487.938 176,472.188 167.875,472.188 167.875,287.937 "></polygon>
                                <polygon points="224,287.937 224,272.187 192,272.187 192,287.937 200.125,287.937 200.125,472.188 192,472.188 192,487.938 224,487.938 224,472.188 215.875,472.188 215.875,287.937 "></polygon>
                                <polygon points="272,287.937 272,272.187 240,272.187 240,287.937 248.126,287.937 248.126,472.188 240,472.188 240,487.938 272,487.938 272,472.188 263.876,472.188 263.876,287.937 "></polygon>
                                <polygon points="320,287.937 320,272.187 288,272.187 288,287.937 296.124,287.937 296.124,472.188 288,472.188 288,487.938 320,487.938 320,472.188 311.875,472.188 311.875,287.937 "></polygon>
                                <polygon points="368.001,287.937 368.001,272.187 359.875,272.187 359.875,272.063 344.125,272.063 344.125,272.187 336,272.187 336,287.937 344.125,287.937 344.125,472.188 336,472.188 336,487.938 368.001,487.938 368.001,472.188 359.875,472.188 359.875,287.937 "></polygon>
                                <rect
                                  x="96.002"
                                  y="224.186"
                                  width="319.998"
                                  height="15.75"
                                ></rect>
                                <rect
                                  x="0"
                                  y="312.186"
                                  width="104.003"
                                  height="15.75"
                                ></rect>
                                <path d="M439.874,170.305l-175.999-56.001V0.063h-15.75v114.242l-176.001,56v45.633h367.75V170.305z M87.874,200.188v-18.367 l168.125-53.494l168.125,53.494v18.367H87.874z"></path>
                                <polygon points="359.875,0.188 272,0.188 272,15.938 344.125,15.938 344.125,40.188 272,40.188 272,55.938 359.875,55.938 "></polygon>
                                <polygon points="384.125,64.188 312,64.188 312,79.938 399.875,79.938 399.875,24.188 368.001,24.188 368.001,39.938 384.125,39.938 "></polygon>
                                <rect
                                  x="248.126"
                                  y="160.062"
                                  width="15.75"
                                  height="16"
                                ></rect>
                                <rect
                                  x="8.015"
                                  y="336.041"
                                  transform="matrix(1 0.0032 -0.0032 1 1.1009 -0.1647)"
                                  width="88.001"
                                  height="15.75"
                                ></rect>
                                <rect
                                  x="8.019"
                                  y="416.324"
                                  transform="matrix(1 0.0032 -0.0032 1 1.3575 -0.1643)"
                                  width="88.001"
                                  height="15.75"
                                ></rect>
                                <rect
                                  x="24.125"
                                  y="368.067"
                                  width="15.75"
                                  height="32"
                                ></rect>
                                <rect
                                  x="64.124"
                                  y="368.067"
                                  width="15.75"
                                  height="32"
                                ></rect>
                                <rect
                                  x="24.125"
                                  y="448.066"
                                  width="15.75"
                                  height="32.001"
                                ></rect>
                                <rect
                                  x="64.124"
                                  y="448.066"
                                  width="15.75"
                                  height="32.001"
                                ></rect>
                                <rect
                                  x="407.999"
                                  y="312.186"
                                  width="104.003"
                                  height="15.75"
                                ></rect>
                                <rect
                                  x="416.017"
                                  y="336.023"
                                  transform="matrix(-1 -0.0032 0.0032 -1 918.9324 689.2661)"
                                  width="88.001"
                                  height="15.75"
                                ></rect>
                                <rect
                                  x="416.021"
                                  y="416.307"
                                  transform="matrix(1 0.0032 -0.0032 1 1.3595 -1.4696)"
                                  width="88.001"
                                  height="15.75"
                                ></rect>
                                <rect
                                  x="432.128"
                                  y="368.067"
                                  width="15.75"
                                  height="32"
                                ></rect>
                                <rect
                                  x="472.122"
                                  y="368.067"
                                  width="15.75"
                                  height="32"
                                ></rect>
                                <rect
                                  x="432.128"
                                  y="448.066"
                                  width="15.75"
                                  height="32.001"
                                ></rect>
                                <rect
                                  x="472.122"
                                  y="448.066"
                                  width="15.75"
                                  height="32.001"
                                ></rect>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h1 className="font-[600] text-blue-600 mt-[5px]">
                        2020-2024
                      </h1>

                      <h1 className="font-[700] sm:text-[24px] text-[16px]">
                        Silver Oak University
                      </h1>
                      <div className="col-md-6 mt-[20px]">
                        <div className="flex justify-between">
                          <h1>1st Year</h1>
                          <h1>9.30 CPI</h1>
                        </div>
                        <progress
                          value={93}
                          max="100"
                          className="progress-custom border rounded-full w-full h-2"
                        ></progress>
                      </div>
                      <div className="col-md-6 mt-[20px]">
                        <div className="flex justify-between">
                          <h1>2st Year</h1>
                          <h1>8.99 CPI</h1>
                        </div>
                        <progress
                          value={90}
                          max="100"
                          className="progress-custom border rounded-full w-full h-2"
                        ></progress>
                      </div>
                      <div className="col-md-6 mt-[20px]">
                        <div className="flex justify-between">
                          <h1>3st Year</h1>
                          <h1>8.88 CPI</h1>
                        </div>
                        <progress
                          value={88}
                          max="100"
                          className="progress-custom border rounded-full w-full h-2"
                        ></progress>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-[2px] text-[#e5e5e5] mt-[30px]" />
            <div className="w-full" ref={sectionRefs.skills} id="skills">
              <div className="p-4">
                <h2 className="text-[30px] mt-[70px] sm:mt-[100px] font-[800] text-blue-700">
                  Skills
                </h2>
              </div>
              <div className="row grid grid-cols-2 lg:grid-cols-4 mt-[40px] gap-x-[20px] sm:gap-x-[30px] sm:gap-y-[30px] lg:gap-x-[35px] lg:gap-y-[35px]  gap-y-[20px] progress-circle mb-5">
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative m-auto">
                    <svg
                      className="transform w-[100px] h-[100px] -rotate-90"
                      // width="100"
                      // height="100"
                    >
                      <circle
                        className="text-gray-300"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={65}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`${75}%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">
                      Java script
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative m-auto">
                    <svg
                      className="transform -rotate-90"
                      width="100"
                      height="100"
                    >
                      <circle
                        className="text-gray-300"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={65}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`${75}%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">
                      React.Js
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative m-auto">
                    <svg
                      className="transform -rotate-90"
                      width="100"
                      height="100"
                    >
                      <circle
                        className="text-gray-300"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={90}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`${60}%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">
                      Redux.js
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative m-auto">
                    <svg
                      className="transform -rotate-90"
                      width="100"
                      height="100"
                    >
                      <circle
                        className="text-gray-300"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={65}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`${75}%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">Jquery</h3>
                  </div>
                </div>
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative m-auto">
                    <svg
                      className="transform -rotate-90"
                      width="100"
                      height="100"
                    >
                      <circle
                        className="text-gray-300"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={65}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`75%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">PHP</h3>
                  </div>
                </div>
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative m-auto">
                    <svg
                      className="transform -rotate-90"
                      width="100"
                      height="100"
                    >
                      <circle
                        className="text-gray-300"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={10}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`${95}%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">html</h3>
                  </div>
                </div>
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative m-auto">
                    <svg
                      className="transform -rotate-90"
                      width="100"
                      height="100"
                    >
                      <circle
                        className="text-gray-300"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={20}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`${90}%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">Css</h3>
                  </div>
                </div>
                <div className="flex flex-col rounded h-[180px] shadow-xl items-center">
                  <div className="relative sm:pt-0  m-auto">
                    <svg
                      className="transform -rotate-90"
                      width="100"
                      height="100"
                    >
                      <circle
                        className="text-gray-300 pt-[10px]"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        stroke="currentColor"
                      />
                      <circle
                        className="text-blue-500"
                        strokeLinecap="round"
                        strokeWidth="5"
                        fill="transparent"
                        r={40}
                        cx="50"
                        cy="50"
                        strokeDasharray={circumference}
                        strokeDashoffset={10}
                        stroke="currentColor"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <p className="text-2xl text-black">{`${95}%`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <h3 className="text-lg font-semibold uppercase">
                      Tailwind css
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-[50px]" />
            <div
              className="w-full pt-[100px] mb-[50px]"
              ref={sectionRefs.experience}
              id="experience"
            >
              <div className="sm:p-4 p-0 ">
                <h2 className="text-[30px] font-[800] text-blue-700">
                  Experience
                </h2>
              </div>
              <div className="flex-row sm:p-4 p-0 pr-[0px] flex  sm:gap-x-6 gap-x-3  gap-y-6 mt-[30px]">
                <div className="flex flex-col">
                  <svg
                    fill="#ffffff"
                    className="sm:w-[60px] w-[45px] sm:h-[60px] h-[45px] pl-1 pr-1 rounded-full border p-2 bg-blue-800 text-white"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-[600] text-blue-600 mt-[5px]">
                    Internship
                  </h1>

                  <h1 className="font-[700] sm:text-[24px] text-[16px]">
                    Gopal Info
                  </h1>
                  <p className="mt-[20px] text-justify text-[18px]">
                    During my internship in web development, I gained hands-on
                    experience with React.js, JavaScript, JQuery, Php. This role
                    allowed me to work on various projects, building interactive
                    web applications from the ground up and learning from
                    experienced developers. I learned to architect and implement
                    robust backend solutions, leveraging php and AJAX for
                    dynamic and asynchronous functionality and MySQL for
                    database management. Additionally, I honed my skills in
                    creating modular components, managing application state, and
                    seamlessly integrating third-party libraries like jQuery to
                    enhance user interactivity. My role involved building user
                    interfaces that were not only visually engaging but also
                    responsive and accessible. <br />
                    Overall, this internship solidified my knowledge of web
                    development and gave me hands-on experience with multiple
                    technologies. It also motivated me to continue learning and
                    expanding my skills to become a versatile and effective web
                    developer.
                  </p>
                </div>
              </div>
              <hr className="mt-[50px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
