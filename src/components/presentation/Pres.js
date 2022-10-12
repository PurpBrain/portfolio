// import React from "react";

const Presentation = () => {
    return (
        <div className="xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] pt-[50px] pb-[110px]">
            <div data-aos="fade-up" data-aos-duration="1200" className="flex justify-center text-5xl text-center text-headline font-Brown pb-[80px]">Qui suis-je ?</div>
            <div className="grid md:grid-cols-2 gap-y-8 grid-row-2 place-items-center">
                <div className="text-xl text-text font-Helvetica">
                    <p data-aos="fade-up" data-aos-duration="1000">
                        Bonjour ! Je suis Léo Doray, j'ai actuellement 18ans et je suis Développeur Web.
                        J'aimerais commencer une formation de <a className="text-tertiary decoration-0 hover:underline" href="https://arinfo.fr/formations/metiers-du-web/concepteur-designer-ui-infographie-numerique-photoshop-illustrator-cms-wordpress">Concepteur Designer UI</a>,<br></br>
                        celle-ci débute en octobre 2022 et se termine en avril 2023. Cependant,<br></br>
                        il me faut encore trouver une alternance en Design afin de pouvoir l'atteindre.<br></br>
                    </p>
                    <p data-aos="fade-up" data-aos-duration="1300" className="py-[30px]">
                        En mai 2022, j'ai obtenu mon diplôme de <a className="text-tertiary decoration-0 hover:underline" href="https://arinfo.fr/formations/metiers-du-web/formation-developpeur-web">Développeur Web</a> après avoir fait une formation chez <a className="text-tertiary decoration-0 hover:underline" href="https://www.arinfo.fr/">Arinfo</a>.<br></br>
                        Durant cette formation, j'ai pu découvrir de nombreux langages et me suis rendu compte que le Front End m'intéressait d'avantage,<br></br>
                        j'ai donc décidé de me lancer dans l'apprentissage du design.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="1600">
                        Je vous laisse, à travers ce portfolio, apprendre à me connaître et découvrir mes différents projets ! 
                    </p>
                </div>
                <img data-aos="zoom-in" data-aos-duration="1300" className="z-10 xl:w-3/5 lg:w-72 md:w-72 w-64 rounded-full drop-shadow-xs" src={require(`../../assets/image/about/moi.jpg`)} alt="Léo-doray" />
            </div>
        </div>
    );
};

export default Presentation;