import React from "react";

const Header = () => {
    return (
        <div class="px-[250px] py-[50px] bg-secondary flex justify-between">
            <div class="justify-center flex flex-col gap-y-4">
                <div class="text-4xl font-BrownLight text-black">Portfolio de</div>
                <div class="uppercase text-5xl text-brown font-Brown">Léo Doray</div>
                <div class="text-xl font-BrownLight text-brown">Web Designer / Développeur Web</div>
            </div>
            <img src={require(`../../assets/image/Illustration-bureau.svg`).default} alt="Svg bureau" />
        </div>
    );
};

export default Header;