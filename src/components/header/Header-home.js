import React from "react";

const Header = () => {
    return (
        <div class="px-[250px] py-[50px] bg-primary flex justify-between">
            <div class="justify-center flex flex-col gap-y-4">
                <div class="text-4xl font-BrownLight text-headline">Portfolio de</div>
                <div class="uppercase text-5xl text-headline font-Brown">Léo Doray</div>
                <div class="text-xl font-BrownLight text-headline">Web Designer / Développeur Web</div>
            </div>
            <img class="w-1/3" src={require(`../../assets/image/Illustration-bureau.svg`).default} alt="Svg bureau" />
        </div>
    );
};

export default Header;