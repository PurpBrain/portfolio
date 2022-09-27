// import React from "react";

const Presentation = () => {
    return (
        <div className="xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] pt-[50px] pb-[110px]">
            <div className="flex justify-center text-5xl text-headline font-Brown pb-[80px]">Qui suis-je ?</div>
            <div className="grid md:grid-cols-2 gap-y-8 grid-row-2 place-items-center">
                <div className="text-xl text-text font-Helvetica">
                    <p>
                        Bonjour! je m'appelle Léo Doray, j'ai 18ans, je suis Développeur Web ainsi<br></br>
                        que Web Designer. Je m'apprête à commencer une formation Concepteur <br></br>
                        Designer UI, qui débute en octobre 2022 sur 6 mois. <br></br>

                    </p>
                    <p className="py-[30px]">
                        J'ai obtenu mon diplôme de Devéloppeur Web en mai 2022.<br></br>
                        Durant cette formation je me suis rendu compte que le Front End m'intéressait d'avantage.<br></br>
                        J'ai décidé de me lancer dans l'apprentissage du design.
                    </p>
                    <p>
                        Ut non ipsum tellus. Proin vel arcu sed orci varius rutrum. Morbi convallis odio ut ex efficitur,<br></br>
                        non tristique arcu lobortis.
                    </p>
                </div>
                <img className="z-10 xl:w-96 lg:w-72 md:w-72 w-64 rounded-full" src={require(`../../assets/image/about/IMG_20210405_104100_255.jpg`)} alt="Léo-doray" />
            </div>
        </div>
    );
};

export default Presentation;