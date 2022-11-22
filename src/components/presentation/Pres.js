// import React from "react";

const Presentation = () => {
    return (
        <div className="container px-5 pt-[50px] pb-[110px]">
            <div data-aos="fade-up" data-aos-duration="1200" className="flex justify-center text-5xl text-center text-headline font-Brown pb-[80px]">Qui suis-je ?</div>
            <div className="grid md:grid-cols-2 gap-y-8 grid-row-2 md:justify-items-end justify-items-center items-center">
                <div className="text-xl text-text font-Helvetica">
                    <p data-aos="fade-up" data-aos-duration="1000">
                        Bonjour ! Je suis Léo Doray, j'ai 18ans et je suis Web Développeur et Designer.
                        J'ai commencer une formation de <a className="text-tertiary decoration-0 hover:underline" href="https://arinfo.fr/formations/metiers-du-web/concepteur-designer-ui-infographie-numerique-photoshop-illustrator-cms-wordpress">Concepteur Designer UI </a>en alternance,
                        celle-ci à débuté en octobre 2022 et se termine en octobre 2023. Cependant,
                        il me faut encore trouver une alternance en Design  dans un délai de 3 mois à partir d'octobre.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="1300" className="py-[30px]">
                        En mai 2022, j'ai obtenu mon diplôme de <a className="text-tertiary decoration-0 hover:underline" href="https://arinfo.fr/formations/metiers-du-web/formation-developpeur-web">Développeur Web</a> après avoir fait une formation chez <a className="text-tertiary decoration-0 hover:underline" href="https://www.arinfo.fr/">Arinfo</a>.
                        Durant cette formation, j'ai pu découvrir de nombreux langages et me suis rendu compte que le Front End m'intéressait d'avantage,
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