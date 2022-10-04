// import React from "react";

const Header = () => {
    return (
        <header className="xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] pb-[50px] pt-[100px] bg-primary flex flex-col sm:flex-row justify-between">
            <div className="justify-center flex flex-col gap-y-4">
                <div data-aos="fade-up" data-aos-duration="1200" className="text-4xl font-BrownLight text-headline">Portfolio de</div>
                <div data-aos="fade-up" data-aos-duration="1400" className="uppercase text-5xl text-headline font-Brown">Léo Doray</div>
                <div data-aos="fade-up" data-aos-duration="1600" className="text-xl font-BrownLight text-headline">Web Designer / Développeur Web</div>
            </div>
            <img data-aos="fade-up" data-aos-duration="1600" className="sm:block w-1/3 hidden" src={require(`../../assets/image/svg/Illustration-bureau.svg`).default} alt="Svg bureau" />
        </header>
    );
};

export default Header;