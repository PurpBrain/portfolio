import React from "react";

const Header = () => {
    return (
        <div class="px-[250px] py-[50px] bg-secondary flex justify-between">
            <div class="flex">
                <p class="mr-[30px] vertcial-text font-BrownLight text-black">Le site<br></br>personnel de</p>
                <p class="font-size-47 text-brown font-Brown">Léo<br></br>Doray</p>
                <p class="font-BrownLight text-brown">Web Designer /<br></br>Développeur Web</p>
            </div>
            <div class="flex">
                <img src={require(`../../assets/image/Illustration-bureau.svg`).default} alt="Svg bureau" />
                <p>Portfolio</p>
            </div>
        </div>
    );
};

export default Header;