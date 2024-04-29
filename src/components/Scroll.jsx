import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-0 right-0 mr-2 sm:mr-4   mb-4 ${
        showButton ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <div className="bottom-0 cursor-pointer text-center sm:w-[40px] w-[25px] h-[25px] sm:h-[40px] pt-[0.7] sm:pt-2 rounded bg-blue-700 ">
        <i className="fa fa-solid w-6 h-6 text-white fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
