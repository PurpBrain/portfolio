// import React from "react";

const Header = () => {
    return (
        <header className="bg-fond bg-no-repeat bg-center bg-cover">
            <div className="container px-5 pb-[50px] pt-[100px] flex flex-col md:flex-row justify-between">
                <img data-aos="fade-up" data-aos-duration="1600" className="" src={require(`../../assets/image/header/text-233.png`)} alt="Perso PS" />
                <img data-aos="fade-up" data-aos-duration="1600" className="hidden sm:block" src={require(`../../assets/image/header/perso-311-233.png`)} alt="Text PS" />
            </div>
        </header>
    );
};

export default Header;