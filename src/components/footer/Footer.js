import React from "react";

const Footer = () => {
    return (
        <footer className="xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] py-[30px] mt-[50px] bg-primary">
            <div className="flex-col flex sm:flex-row sm:justify-between text-text pb-[25px]">
                <p className="pb-[25px] sm:pb-[0px]">© 2022 Léo Doray</p>
                <a className="flex hover:text-tertiary ease-out duration-300" href="https://github.com/PurpBrain/portfolio">
                    Repositorie du site Portfolio
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github ml-[13px]">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
            </div>
            <div className="text-text sm:text-center">
                <p>Construit par Léo Doray<br></br>
                    Merci d’avoir lu jusqu’ici, j’espère que le site vous a plu</p>
            </div>
        </footer>
    );
};

export default Footer;