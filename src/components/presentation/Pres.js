import React from "react";

const Presentation = () => {
    return (
        <div class="px-[250px] py-[50px]">
            <div class="flex justify-center">Qui suis-je ?</div>
            <div class="flex justify-between">
                <div>
                    <p>Bonjour! je m'appelle Léo Doray, j'ai 18ans, je suis Développeur Web ainsi que Web Designer.<br></br>
                        Je m'apprête à commencer une formation Concepteur Designer UI en alternance,<br></br> 
                        qui débute en octobre 2022 sur 1 ans.<br></br>
                    </p>
                    <p></p>
                </div>
                <div class="w-72">
                    <img class="rounded-full" src={require(`../../assets/image/IMG_20210405_104100_255.jpg`)} alt="Léo-doray" />
                </div>
            </div>
        </div>
    );
};

export default Presentation;