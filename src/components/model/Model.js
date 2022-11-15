import React from "react";

const Model = () => {
    return (
        <div className="container px-5 py-[50px] bg-secondary flex-col justify-center">
            <h1 data-aos="fade-up" data-aos-duration="1200" className="pt-[50px] flex justify-center text-5xl text-center text-headline font-Brown pb-[80px]">Quelques maquettes</h1>
            <div className="flex justify-center" data-aos="fade-left" data-aos-duration="1200">
                <div className="space-y-5">
                    <h2 className="text-4xl text-center text-headline font-BrownLight">Portfolio</h2>
                    <div className="sameDiv">
                        <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/38j63BOeIGft7vTiE8WCg9/Portfolio?page-id=0%3A1&node-id=204%3A107&scaling=min-zoom&starting-point-node-id=2%3A3">
                            <img alt="Maquette Portfolio" className="drop-shadow-xs hover:border-tertiary ease-out duration-300 sameModel border border-white" src={require(`../../assets/image/model/maquette-portfolio.png`)}></img>
                        </a>
                    </div>
                    <p className="space-x-1 text-end text-headline ">
                        <span>Août</span>
                        <span>-</span>
                        <span>2022</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Model;