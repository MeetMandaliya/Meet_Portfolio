import React from "react";

const Projects = () => {
  return (
    <>
      <section className="pt-[60px] sm:pt-[100px]">
        <div className="text-center text-[50px] font-[700]">Projects</div>
        <div className="w-full mt-[50px] mb-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-[20px] gap-x-[20px] ml-[12%] mr-[12%]">
            <div className="w-full h-full shadow-2xl hover:bg-blue-600  text-black">
              <div className="custom-svg">
                <svg
                  viewBox="0 0 64 64"
                  className="m-auto w-[100px] mt-[35px]"
                  id="Layer_1"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
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
                        <path
                          fill="currentColor"
                          d="M49.034,57.819H12.771c-4.56,0-8.271-3.71-8.271-8.271V8.78c0-1.435,1.164-2.599,2.599-2.599 h41.935c1.435,0,2.599,1.164,2.599,2.599v46.44C51.633,56.656,50.47,57.819,49.034,57.819z M9.698,11.379v38.169 c0,1.694,1.378,3.073,3.072,3.073h33.664V11.379H9.698z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M49.034,26.844H7.099c-1.435,0-2.599-1.164-2.599-2.599c0-1.436,1.164-2.599,2.599-2.599h41.935 c1.435,0,2.599,1.164,2.599,2.599C51.633,25.68,50.47,26.844,49.034,26.844z"
                        ></path>
                      </g>
                      <g>
                        <rect
                          fill="currentColor"
                          height="4.536"
                          width="23.511"
                          x="16.051"
                          y="14.173"
                        ></rect>
                      </g>
                      <g>
                        <rect
                          fill="currentColor"
                          height="13.782"
                          width="12.049"
                          x="14.42"
                          y="28.845"
                        ></rect>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M23.125,50.59h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S24.561,50.59,23.125,50.59z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M40.407,50.59h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S41.842,50.59,40.407,50.59z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M40.407,42.595h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S41.842,42.595,40.407,42.595z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M40.407,34.599h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S41.842,34.599,40.407,34.599z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M52.968,57.819c-3.602,0-6.532-2.93-6.532-6.532V14.173c0-1.435,1.164-2.599,2.599-2.599h7.867 c1.435,0,2.599,1.164,2.599,2.599v37.114C59.5,54.889,56.57,57.819,52.968,57.819z M51.633,16.772v34.515 c0,0.736,0.599,1.334,1.334,1.334c0.736,0,1.334-0.599,1.334-1.334V16.772H51.633z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M52.968,57.819h-6.269c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h6.269 c1.435,0,2.599,1.164,2.599,2.599S54.403,57.819,52.968,57.819z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="flex flex-col ">
                  <h1 className="text-black  text-[13px] font-[500] tracking-wider mt-[20px] text-center">
                    NEWS WEBSITE
                  </h1>
                  <div className="w-[30px] m-auto h-[4px] mb-[25px] text-blue-700 bg-black !hover:text-black  mt-[10px]"></div>
                </div>
                <p className="p-4 pt-[10px] font-serif text-justify text-black">
                  This project is a responsive news website. That fetch and
                  display top headlines based on various categories using the
                  News API.
                </p>
                <div className="h-[50px]  text-white cursor-pointer text-end pr-[20px]">
                  <a href="https://github.com/meetmandaliya/News-Website/">
                    Github-Link <i className="fa fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full h-full shadow-2xl hover:bg-blue-600  text-black">
              <div className="custom-svg">
                <svg
                  viewBox="0 0 48 48"
                  className="m-auto w-[100px] mt-[35px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    
                    <path
                      d="M6 11.25C6 8.35051 8.3505 6 11.25 6H36.75C39.6495 6 42 8.3505 42 11.25V24.0436C41.2196 23.544 40.3823 23.1255 39.5 22.7999V11.25C39.5 9.73122 38.2688 8.5 36.75 8.5H11.25C9.73122 8.5 8.5 9.73122 8.5 11.25V36.75C8.5 38.2688 9.73122 39.5 11.25 39.5H22.7999C23.1255 40.3823 23.544 41.2196 24.0436 42H11.25C8.35051 42 6 39.6495 6 36.75V11.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10 21.5C10 19.0147 12.0147 17 14.5 17C16.9853 17 19 19.0147 19 21.5C19 23.9853 16.9853 26 14.5 26C12.0147 26 10 23.9853 10 21.5ZM14.5 19.5C13.3954 19.5 12.5 20.3954 12.5 21.5C12.5 22.6046 13.3954 23.5 14.5 23.5C15.6046 23.5 16.5 22.6046 16.5 21.5C16.5 20.3954 15.6046 19.5 14.5 19.5Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.5 29C12.0147 29 10 31.0147 10 33.5C10 35.9853 12.0147 38 14.5 38C16.9853 38 19 35.9853 19 33.5C19 31.0147 16.9853 29 14.5 29ZM12.5 33.5C12.5 32.3954 13.3954 31.5 14.5 31.5C15.6046 31.5 16.5 32.3954 16.5 33.5C16.5 34.6046 15.6046 35.5 14.5 35.5C13.3954 35.5 12.5 34.6046 12.5 33.5Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M21.0012 20.25C21.0012 19.5596 21.5609 19 22.2512 19H36.75C37.4404 19 38 19.5596 38 20.25C38 20.9404 37.4404 21.5 36.75 21.5H22.2512C21.5609 21.5 21.0012 20.9404 21.0012 20.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11.2632 11.0952C10.5728 11.0952 10.0132 11.6549 10.0132 12.3452C10.0132 13.0356 10.5728 13.5952 11.2632 13.5952H36.7298C37.4202 13.5952 37.9798 13.0356 37.9798 12.3452C37.9798 11.6549 37.4202 11.0952 36.7298 11.0952H11.2632Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M46 35C46 41.0751 41.0751 46 35 46C28.9249 46 24 41.0751 24 35C24 28.9249 28.9249 24 35 24C41.0751 24 46 28.9249 46 35ZM36 28C36 27.4477 35.5523 27 35 27C34.4477 27 34 27.4477 34 28V34H28C27.4477 34 27 34.4477 27 35C27 35.5523 27.4477 36 28 36H34V42C34 42.5523 34.4477 43 35 43C35.5523 43 36 42.5523 36 42V36H42C42.5523 36 43 35.5523 43 35C43 34.4477 42.5523 34 42 34H36V28Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <div className="flex flex-col ">
                  <h1 className="text-black text-[13px] font-[500] tracking-wider mt-[20px] text-center ">
                    FORM BUILDER
                  </h1>
                  <div className="w-[30px] m-auto h-[4px] mb-[25px] text-blue-700 bg-black !hover:text-black  mt-[10px]"></div>
                </div>
                <p className="p-4 pb-2 pt-[0px] font-serif text-justify text-black">
                  A form builder website lets users create custom forms via
                  drag-and-drop, providing customizable fields and output in
                  HTML or JSON for integration or embedding
                </p>
                <div className="h-[50px] text-white cursor-pointer text-end pr-[20px]">
                  <a href="https://github.com/meetmandaliya/News-Website/">
                    Github-Link <i className="fa fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full h-full shadow-2xl hover:bg-blue-700  text-black">
              <div className="custom-svg">
                <svg
                  viewBox="0 0 64 64"
                  className="m-auto w-[100px] mt-[35px]"
                  id="Layer_1"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
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
                        <path
                          fill="currentColor"
                          d="M49.034,57.819H12.771c-4.56,0-8.271-3.71-8.271-8.271V8.78c0-1.435,1.164-2.599,2.599-2.599 h41.935c1.435,0,2.599,1.164,2.599,2.599v46.44C51.633,56.656,50.47,57.819,49.034,57.819z M9.698,11.379v38.169 c0,1.694,1.378,3.073,3.072,3.073h33.664V11.379H9.698z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M49.034,26.844H7.099c-1.435,0-2.599-1.164-2.599-2.599c0-1.436,1.164-2.599,2.599-2.599h41.935 c1.435,0,2.599,1.164,2.599,2.599C51.633,25.68,50.47,26.844,49.034,26.844z"
                        ></path>
                      </g>
                      <g>
                        <rect
                          fill="currentColor"
                          height="4.536"
                          width="23.511"
                          x="16.051"
                          y="14.173"
                        ></rect>
                      </g>
                      <g>
                        <rect
                          fill="currentColor"
                          height="13.782"
                          width="12.049"
                          x="14.42"
                          y="28.845"
                        ></rect>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M23.125,50.59h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S24.561,50.59,23.125,50.59z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M40.407,50.59h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S41.842,50.59,40.407,50.59z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M40.407,42.595h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S41.842,42.595,40.407,42.595z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M40.407,34.599h-5.848c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h5.848 c1.435,0,2.599,1.164,2.599,2.599S41.842,34.599,40.407,34.599z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M52.968,57.819c-3.602,0-6.532-2.93-6.532-6.532V14.173c0-1.435,1.164-2.599,2.599-2.599h7.867 c1.435,0,2.599,1.164,2.599,2.599v37.114C59.5,54.889,56.57,57.819,52.968,57.819z M51.633,16.772v34.515 c0,0.736,0.599,1.334,1.334,1.334c0.736,0,1.334-0.599,1.334-1.334V16.772H51.633z"
                        ></path>
                      </g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M52.968,57.819h-6.269c-1.435,0-2.599-1.164-2.599-2.599s1.164-2.599,2.599-2.599h6.269 c1.435,0,2.599,1.164,2.599,2.599S54.403,57.819,52.968,57.819z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="flex flex-col ">
                  <h1 className="text-black  text-[13px] font-[500] tracking-wider mt-[20px] text-center">
                  FASHION CART
                  </h1>
                  <div className="w-[30px] m-auto h-[4px] mb-[25px] text-blue-700 bg-black !hover:text-black  mt-[10px]"></div>
                </div>
                <p className="p-4 pt-[10px] font-serif text-justify text-black">
                 
Crafted 'Fashion Cart,' an e-commerce destination tailored for fashion enthusiasts, leveraging PHP and MySQL. 
In addition to the customer-facing functionalities, I also engineered an intuitive admin panel for 'Fashion Cart,' providing seamless management of product listings, orders, and customer accounts.
                </p>
                <div className="h-[50px]  text-white cursor-pointer text-end pr-[20px]">
                  <a href="https://github.com/meetmandaliya/News-Website/">
                    Github-Link <i className="fa fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
