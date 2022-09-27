// import React from "react";

const Header = () => {
    return (
        <header className="xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] pb-[50px] pt-[100px] bg-primary flex flex-col sm:flex-row justify-between">
            <div className="justify-center flex flex-col gap-y-4">
                <div className="text-4xl font-BrownLight text-headline">Portfolio de</div>
                <div className="uppercase text-5xl text-headline font-Brown">Léo Doray</div>
                <div className="text-xl font-BrownLight text-headline">Web Designer / Développeur Web</div>
            </div>
            <img className="sm:block w-1/2 hidden" src={require(`../../assets/image/svg/Illustration-bureau.svg`).default} alt="Svg bureau" />
        </header>
    );
};

export default Header;