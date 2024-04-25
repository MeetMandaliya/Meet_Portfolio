import React from "react";
import Resume from "../assets/Resume.pdf";
import buildings from "../assets/buildings.jpg";

const About = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.setAttribute("download", "Meet_CV.pdf");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <>
      <section>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-start">
          <div className="w-full pl-[12%] lg:pr-[0%] pr-[12%] h-full">
            <img src={buildings} className="h-[500px] w-[100%]" alt="Image" />
          </div>
          <div className="w-full mt-[20px] lg:mt-[0px] pr-[0px] lg:pr-[12%] sm:pl-[0px]  text-wrap  lg:py-6">
            <h1 className="font-[700] text-center lg:pl-[30px] lg:text-start text-[50px]">
              About me
            </h1>
              <div className="text-center ">
                <p className="text-justify w-full lg:pr-[0px] pr-[12%] pl-[12%] sm:pl-[12%] lg:pl-[30px] py-2 text-[18px]">
                  I'm a final year student pursuing Computer Science &
                  Engineering with Cyber Security at Silver Oak University. My
                  technical skills include React.js, JavaScript, Php, Mysql,
                  AJAX, CSS, HTML and Tailwind CSS. I'm passionate about
                  building engaging, responsive websites, and I have a knack for
                  learning new technologies quickly. Outside of technical
                  skills, I bring a strong work ethic, a collaborative spirit,
                  and a passion for creating meaningful digital experiences. I
                  believe that with my combination of technical expertise and
                  enthusiasm for growth, I can make a significant impact in any
                  development team I join.
                </p>
              </div>
            <button
              onClick={handleDownloadClick}
              className="w-[150px] ml-[12%] mt-[25px] h-[50px] border rounded-full tracking-[2px] text-white bg-blue-600 font-[700] hover:text-black  lg:ml-[30px] text-[12px]"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
