// import React from "react";

const Projet = () => {
    return (
        <div className="xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] pt-[50px] pb-[200px] bg-primary flex-col justify-center">
            <div className="pt-[100px] flex justify-center text-5xl text-headline font-Brown pb-[80px]">Mes projets</div>
            <div className="grid gap-y-32 justify-center">
                <div className="bg-projet-1 bg-center bg-cover grid lg:grid-cols-2 place-items-center lg:bg-none">
                    <div className="bg-primary/75 lg:bg-primary/0 p-[15px] grid gap-y-3 content-center lg:mr-[-100px] z-10">
                        <div className="text-xs text-tertiary font-Raleway font-medium">
                            <span className="pr-[5px]">2022</span>
                            <span className="pr-[5px]">-</span>
                            <span>Projet de Formation</span>
                        </div>
                        <a className="text-xl text-headline font-Raleway font-semibold" href="https://jdm.boutique/">Jdm.boutique</a>
                        <div className="text-base text-text font-Raleway font-regular lg:bg-secondary lg:px-[13px] py-[28px] rounded-lg lg:drop-shadow-xs">
                            <p>
                                Projet réalisé durant ma formation de développeur Web & Web Mobile.
                                On peut y publier des annonces sur automobiles comme un blog, se créer un compte,
                                échanger avec les utilisateurs sur les voitures etc.
                            </p>
                        </div>
                        <div className="text-tertiary">
                            <a className="pr-[20px]" href="https://nodejs.org/en/">NodeJS</a>
                            <a className="pr-[20px]" href="https://sass-lang.com/">SCSS</a>
                            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">JavaScript</a>
                        </div>
                        <a className="text-icon" href="https://github.com/PurpBrain/JdmBoutique">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                    <div className="drop-shadow-xs hidden lg:block">
                        <img className="sameImg" src={require(`../../assets/image/projet/Gta-5.jpg`)} alt="Projet 1" />
                    </div>
                </div>
                <div className="bg-projet-2 bg-center bg-cover grid lg:grid-cols-2 place-items-center lg:bg-none">
                    <div className="drop-shadow-xs hidden lg:block">
                        <img className="sameImg" src={require(`../../assets/image/projet/Lune.jpg`)} alt="Projet 1" />
                    </div>
                    <div className="bg-primary/75 lg:bg-primary/0 lg:text-right p-[15px] grid gap-y-3 content-center lg:ml-[-100px] z-10">
                        <div className="text-xs text-tertiary font-Raleway font-medium">
                            <span className="pr-[5px]">2022</span>
                            <span className="pr-[5px]">-</span>
                            <span>Projet de Formation</span>
                        </div>
                        <a className="text-xl text-headline font-Raleway font-semibold" href="https://jdm.boutique/">Jdm.boutique</a>
                        <div className="text-base text-text font-Raleway font-regular lg:bg-secondary lg:px-[13px] py-[28px] rounded-lg lg:drop-shadow-xs">
                            <p>
                                Projet réalisé durant ma formation de développeur Web & Web Mobile.
                                On peut y publier des annonces sur automobiles comme un blog, se créer un compte,
                                échanger avec les utilisateurs sur les voitures etc.
                            </p>
                        </div>
                        <div className="text-tertiary">
                            <a className="pr-[20px]" href="https://nodejs.org/en/">NodeJS</a>
                            <a className="pr-[20px]" href="https://sass-lang.com/">SCSS</a>
                            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">JavaScript</a>
                        </div>
                        <a className="text-icon flex lg:justify-end" href="https://github.com/PurpBrain/JdmBoutique">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projet;