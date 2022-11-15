// import React from "react";

const Header = () => {
    return (
        <header className="bg-fond bg-no-repeat bg-center  bg-cover">
            <div className="container px-5 pb-[50px] pt-[100px] flex flex-col md:flex-row justify-between">
                {/* <img data-aos="fade-up" data-aos-duration="1600" className="sm:block hidden" src={require(`../../assets/image/header/text_and_perso.png`)} alt="Text And Perso PS" /> */}
                <img data-aos="fade-up" data-aos-duration="1600" className="" src={require(`../../assets/image/header/text.png`)} alt="Perso PS" />
                <img data-aos="fade-up" data-aos-duration="1600" className="" src={require(`../../assets/image/header/perso.png`)} alt="Text PS" />
            </div>
        </header>
    );
};

export default Header;