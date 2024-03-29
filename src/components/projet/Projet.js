// import React from "react";
import React from 'react'

const Projet = () => {

    return (
        <div className='bg-primary'>
            <div className="container px-5 pt-[50px] pb-[200px] flex-col justify-center">
                <div data-aos="fade-up" data-aos-duration="1200" className="pt-[100px] flex justify-center text-5xl text-center text-headline font-Brown pb-[80px]">Mes projets</div>
                <div className="grid gap-y-32 justify-center">
                    <div data-aos="fade-up" data-aos-duration="1200" className="bg-projet-bulls rounded-xl bg-center bg-cover grid lg:grid-cols-2 place-items-center lg:bg-none">
                        <div className="p-[15px] lg:pl-[0px] grid gap-y-3 content-center lg:mr-[-100px] z-10">
                            <div className="text-xs text-tertiary font-Raleway font-medium">
                                <span className="pr-[5px]">2023</span>
                                <span className="pr-[5px]">-</span>
                                <span>Projet d'identité visuelle</span>
                            </div>
                            <a target="_blank" rel="noreferrer" className="text-xl hover:text-headline/75 ease-out duration-300 text-headline font-Raleway font-semibold" href="https://www.behance.net/gallery/161965861/Bulls-Brand-Identity">Bulls</a>
                            <div className="text-base text-text font-Raleway font-regular lg:bg-secondary lg:px-[13px] py-[28px] rounded-lg lg:drop-shadow-xs">
                                <p>
                                    Durant ma courte période en formation, fin 2022, j'avais lancé le projet fictif Bulls,
                                    un préparateur automobile spécialiste du blindage pour des clients tels que les chefs d'état ou les grandes stars etc.
                                    Pour ça, il me fallait un logo approprié et voici sa présentation sur Behance.
                                </p>
                            </div>
                            <div className="text-tertiary">
                                <a target="_blank" rel="noreferrer" className="hover:text-tertiary/75 pr-[20px] ease-out duration-300" href="https://www.adobe.com/fr/products/illustrator.html">Illustrator</a>
                            </div>
                        </div>
                        <div className="drop-shadow-xs hidden lg:block">
                            <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/161965861/Bulls-Brand-Identity">
                                <img className="sameImg" src={require(`../../assets/image/projet/bulls.jpg`)} alt="Bulls"/>
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1200" className="bg-projet-3 rounded-xl bg-center bg-cover grid lg:grid-cols-2 place-items-center lg:bg-none">
                        <div className="drop-shadow-xs hidden lg:block">
                            <a href='https://www.behance.net/gallery/158861771/Initial-Deal-Brand-Identity' target="_blank" rel="noreferrer">
                                <video className="sameImg" src={require(`../../assets/image/projet/InitialDeal_video.mp4`)} autoPlay loop muted ></video>
                            </a>
                        </div>
                        <div className="lg:text-right p-[15px] lg:pr-[0px] grid gap-y-3 content-center lg:ml-[-100px] z-10">
                            <div className="text-xs text-tertiary font-Raleway font-medium">
                                <span className="pr-[5px]">2022</span>
                                <span className="pr-[5px]">-</span>
                                <span>Projet d'identité visuelle</span>
                            </div>
                            <a className="text-xl text-headline hover:text-headline/75 ease-out duration-300 font-Raleway font-semibold" target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/158861771/Initial-Deal-Brand-Identity">InitialDeal*</a>
                            <div className="text-base text-text font-Raleway font-regular lg:bg-secondary lg:px-[13px] py-[28px] rounded-lg lg:drop-shadow-xs">
                                <p>
                                    Durant la formation, j'ai réaliser Jdm.Boutique un site sans réel identité visulle.
                                    Après une stratégie établie et un changement de nom plus tard.
                                    J'ai conçu le logo ainsi qu'une belle présentation qui va avec !
                                </p>
                            </div>
                            <div className="text-tertiary">
                                <a target="_blank" rel="noreferrer" className="pr-[20px] hover:text-tertiary/75 ease-out duration-300" href="https://www.adobe.com/fr/products/illustrator.html">Illustrator</a>
                                <a target="_blank" rel="noreferrer" className="hover:text-tertiary/75 ease-out duration-300" href="https://www.adobe.com/fr/products/photoshop.html">PhotoShop</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1200" className="bg-projet-1 rounded-xl bg-center bg-cover grid lg:grid-cols-2 place-items-center lg:bg-none">
                        <div className="p-[15px] lg:pl-[0px] grid gap-y-3 content-center lg:mr-[-100px] z-10">
                            <div className="text-xs text-tertiary font-Raleway font-medium">
                                <span className="pr-[5px]">2022</span>
                                <span className="pr-[5px]">-</span>
                                <span>Projet Portfolio</span>
                            </div>
                            <a className="text-xl hover:text-headline/75 ease-out duration-300 text-headline font-Raleway font-semibold" href="/">Portfolio</a>
                            <div className="text-base text-text font-Raleway font-regular lg:bg-secondary lg:px-[13px] py-[28px] rounded-lg lg:drop-shadow-xs">
                                <p>
                                    J'ai décidé de me lancer dans un projet indépendant qui n'est autre qu'un portfolio en ligne. Selon moi, un portfolio en ligne est un moyen de montrer mes compétences en les appliquants. Il est également facile d'utilisation pour un potentiel employeur, etc.
                                </p>
                            </div>
                            <div className="text-tertiary">
                                <a target="_blank" rel="noreferrer" className="hover:text-tertiary/75 pr-[20px] ease-out duration-300" href="https://nodejs.org/en/">NodeJS</a>
                                <a target="_blank" rel="noreferrer" className="hover:text-tertiary/75 pr-[20px] ease-out duration-300" href="https://fr.reactjs.org/">React</a>
                                <a target="_blank" rel="noreferrer" className='hover:text-tertiary/75 ease-out duration-300' href="https://tailwindcss.com/">Tailwind</a>
                            </div>
                            <a className="text-icon" target="_blank" rel="noreferrer" href="https://github.com/PurpBrain/portfolio">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </div>
                        <div className="drop-shadow-xs hidden lg:block">
                            <a href="/">
                                <video className="sameImg" src={require(`../../assets/image/projet/portfolio.mp4`)} autoPlay loop muted />
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1200" className="bg-projet-2 rounded-xl bg-center bg-cover grid lg:grid-cols-2 place-items-center lg:bg-none">
                        <div className="drop-shadow-xs hidden lg:block">
                            <a href='https://jdm.boutique/' target="_blank" rel="noreferrer">
                                <video className="sameImg" src={require(`../../assets/image/projet/jdm.mp4`)} autoPlay loop muted ></video>
                            </a>
                        </div>
                        <div className="lg:text-right p-[15px] lg:pr-[0px] grid gap-y-3 content-center lg:ml-[-100px] z-10">
                            <div className="text-xs text-tertiary font-Raleway font-medium">
                                <span className="pr-[5px]">2022</span>
                                <span className="pr-[5px]">-</span>
                                <span>Projet de Formation</span>
                            </div>
                            <a className="text-xl text-headline hover:text-headline/75 ease-out duration-300 font-Raleway font-semibold" target="_blank" rel="noreferrer" href="https://jdm.boutique/">Jdm.boutique</a>
                            <div className="text-base text-text font-Raleway font-regular lg:bg-secondary lg:px-[13px] py-[28px] rounded-lg lg:drop-shadow-xs">
                                <p>
                                    Durant la formation, j'ai dû suivre un projet et j'ai choisi de créer Jdm.Boutique.
                                    L'idée m'est venue d'un site de vente de véhicules entre particuliers.
                                    On peut donc créer un compte, poster des annonces, des commentaires et contacter un administateur.
                                </p>
                            </div>
                            <div className="text-tertiary">
                                <a target="_blank" rel="noreferrer" className="pr-[20px] hover:text-tertiary/75 ease-out duration-300" href="https://nodejs.org/en/">NodeJS</a>
                                <a target="_blank" rel="noreferrer" className="pr-[20px] hover:text-tertiary/75 ease-out duration-300" href="https://sass-lang.com/">SASS</a>
                                <a target="_blank" rel="noreferrer" className='hover:text-tertiary/75 ease-out duration-300' href="https://getbootstrap.com/">Bootstrap</a>
                            </div>
                            <a className="text-icon flex lg:justify-end ease-out duration-300" target="_blank" rel="noreferrer" href="https://github.com/PurpBrain/JdmBoutique">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projet;