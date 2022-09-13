import React from "react";

const Presentation = () => {
    return (
        <div class="px-[250px] pt-[50px] pb-[110px]">
            <div class="flex justify-center text-5xl text-headline font-Brown pb-[80px]">Qui suis-je ?</div>
            <div class="flex justify-between">
                <div class="text-xl text-text font-Helvetica">
                    <p>
                        Bonjour! je m'appelle Léo Doray, j'ai 18ans, je suis Développeur Web ainsi<br></br> 
                        que Web Designer. Je m'apprête à commencer une formation Concepteur <br></br> 
                        Designer UI en alternance, qui débute en octobre 2022 sur 1 ans. <br></br>
                        
                    </p>
                    <p class="py-[30px]">
                        In et venenatis eros, eget dignissim erat. Donec vel justo vel est iaculis sodales<br></br>
                        id at neque. Vestibulum nec lacinia ex, sapien ex tempus sem, <br></br>
                        at sagittis lacus enim nec mauris.
                    </p>
                    <p>
                        Ut non ipsum tellus. Proin vel arcu sed orci varius rutrum. Morbi convallis odio ut ex efficitur,<br></br> 
                        non tristique arcu lobortis. 
                    </p>
                </div>
                <div class="w-72">
                    <img class="rounded-full" src={require(`../../assets/image/IMG_20210405_104100_255.jpg`)} alt="Léo-doray" />
                </div>
            </div>
        </div>
    );
};

export default Presentation;