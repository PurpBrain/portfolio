// import React from "react";

const Header = () => {
    return (
        <div className="px-[250px] pb-[50px] pt-[105px] bg-primary flex justify-between">
            <div className="justify-center flex flex-col gap-y-4">
                <div className="text-4xl font-BrownLight text-headline">Portfolio de</div>
                <div className="uppercase text-5xl text-headline font-Brown">Léo Doray</div>
                <div className="text-xl font-BrownLight text-headline">Web Designer / Développeur Web</div>
            </div>
            <img className="w-1/3" src={require(`../../assets/image/Illustration-bureau.svg`).default} alt="Svg bureau" />
        </div>
    );
};

export default Header;