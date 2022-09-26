// import React from "react";

const Presentation = () => {
    return (
        <div className="xl:px-[250px] lg:px-[100px] md:px-[50px] pt-[50px] pb-[110px]">
            <div className="flex justify-center text-5xl text-headline font-Brown pb-[80px]">Qui suis-je ?</div>
            <div className="flex justify-between flex-col md:justify-center lg:flex-row">
                <div className="text-xl text-text font-Helvetica">
                    <p>
                        Bonjour! je m'appelle Léo Doray, j'ai 18ans, je suis Développeur Web ainsi<br></br> 
                        que Web Designer. Je m'apprête à commencer une formation Concepteur <br></br> 
                        Designer UI en alternance, qui débute en octobre 2022 sur 1 an. <br></br>
                        
                    </p>
                    <p className="py-[30px]">
                        In et venenatis eros, eget dignissim erat. Donec vel justo vel est iaculis sodales<br></br>
                        id at neque. Vestibulum nec lacinia ex, sapien ex tempus sem, <br></br>
                        at sagittis lacus enim nec mauris.
                    </p>
                    <p>
                        Ut non ipsum tellus. Proin vel arcu sed orci varius rutrum. Morbi convallis odio ut ex efficitur,<br></br> 
                        non tristique arcu lobortis. 
                    </p>
                </div>
                <div className="w-72">
                    <img className="rounded-full" src={require(`../../assets/image/about/IMG_20210405_104100_255.jpg`)} alt="Léo-doray" />
                </div>
            </div>
        </div>
    );
};

export default Presentation;