import React from "react";

const Contact = () => {
    return (
        <div className="xl:px-[250px] lg:px-[100px] md:px-[50px] py-[50px] relative">
            <div className="flex justify-center text-5xl text-headline font-Brown pb-[100px]">Comment me contacter ?</div>
            <div className="flex gap-x-5 justify-center">
                <a style={{ "--size": "83.61px" }} className="flex bg-primary gap-x-2.5 py-[10px] pl-[10px] hover:pr-[10px] rounded-lg items-center text-headline" href="https://www.linkedin.com/in/l%C3%A9o-doray-529506203/">
                    <svg width="45" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                        <path d="M30.9961 15C33.9798 15 36.8413 16.1853 38.951 18.295C41.0608 20.4048 42.2461 23.2663 42.2461 26.25V39.375H34.7461V26.25C34.7461 25.2554 34.351 24.3016 33.6477 23.5984C32.9445 22.8951 31.9907 22.5 30.9961 22.5C30.0015 22.5 29.0477 22.8951 28.3444 23.5984C27.6412 24.3016 27.2461 25.2554 27.2461 26.25V39.375H19.7461V26.25C19.7461 23.2663 20.9314 20.4048 23.0411 18.295C25.1509 16.1853 28.0124 15 30.9961 15V15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2461 16.875H4.74609V39.375H12.2461V16.875Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.49609 11.25C10.5672 11.25 12.2461 9.57107 12.2461 7.5C12.2461 5.42893 10.5672 3.75 8.49609 3.75C6.42503 3.75 4.74609 5.42893 4.74609 7.5C4.74609 9.57107 6.42503 11.25 8.49609 11.25Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="ease-in-out duration-500 size overflow-hidden w-0">
                        <span className="whitespace-nowrap text-white text-base font-Raleway">in/léo-doray</span>
                    </div>
                </a>
                <a style={{ "--size": "62.28px" }} className="flex bg-primary gap-x-2.5 py-[10px] pl-[10px] hover:pr-[10px] rounded-lg items-center text-headline" href="https://www.instagram.com/leo_dr72/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <div className="ease-in-out duration-500 size overflow-hidden w-0">
                        <span className="whitespace-nowrap text-white text-base font-Raleway">leo_dr72</span>
                    </div>
                </a>
                <a style={{ "--size": "71.16px" }} className="flex bg-primary gap-x-2.5 py-[10px] pl-[10px] hover:pr-[10px] rounded-lg items-center text-headline" href="https://github.com/PurpBrain">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <div className="ease-in-out duration-500 size overflow-hidden w-0">
                        <span className="whitespace-nowrap text-white text-base font-Raleway">PurpBrain</span>
                    </div>
                </a>
                <a style={{ "--size": "154.97px" }} className="flex bg-primary gap-x-2.5 py-[10px] pl-[10px] hover:pr-[10px] rounded-lg items-center text-headline" href="mailto:leo.doray@gmail.com">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                        <path d="M7.5 7.5H37.5C39.5625 7.5 41.25 9.1875 41.25 11.25V33.75C41.25 35.8125 39.5625 37.5 37.5 37.5H7.5C5.4375 37.5 3.75 35.8125 3.75 33.75V11.25C3.75 9.1875 5.4375 7.5 7.5 7.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M41.25 11.25L22.5 24.375L3.75 11.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <div className="ease-in-out duration-500 size overflow-hidden w-0">
                        <span className="whitespace-nowrap text-white text-base font-Raleway">leo.doray@gmail.com</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Contact;