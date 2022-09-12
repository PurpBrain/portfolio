import React from "react";

const Projet = () => {
    return (
        <div class="px-[250px] py-[50px] bg-secondary flex-col justify-center">
            <div class="pt-[100px] flex justify-center text-5xl text-brown font-Brown pb-[80px]">Mes projets</div>
            <div class="grid gap-y-32">
                <div class="flex flex-rows">
                    <div>
                        <p class="text-xs text-tertiary font-Raleway font-medium">2022 - Projet de Formation</p>
                        <p class="text-xl text-black font-Raleway font-semibold">Jdm.boutique</p>
                        <p class="text-base text-brown font-Raleway font-regular bg-primary px-[13px] py-[28px] rounded-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                            Mauris porttitor mi at sapien tincidunt condimentum sed vel ante.<br></br>
                            Sed venenatis mi at erat fringilla, vel sollicitudin libero fermentum.<br></br>
                            Vivamus rutrum venenatis ultricies.
                        </p>
                    </div>
                    <div>
                        <img class="sameImg" src={require(`../../assets/image/Gta-5.jpg`)} alt="Projet 1" />
                    </div>
                </div>
                <div class="flex flex-rows justify-center">
                    <div>
                        <img class="sameImg" src={require(`../../assets/image/Lune.jpg`)} alt="Projet 1" />
                    </div>
                    <div>
                        <p>2022 - Projet de Formation</p>
                        <p>Jdm.boutique</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                            Mauris porttitor mi at sapien tincidunt condimentum sed vel ante.<br></br>
                            Sed venenatis mi at erat fringilla, vel sollicitudin libero fermentum.<br></br>
                            Vivamus rutrum venenatis ultricies.
                        </p>
                    </div>
                </div>
                <div class="flex flex-rows justify-center">
                    <div>
                        <p>2022 - Projet de Formation</p>
                        <p>Jdm.boutique</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                            Mauris porttitor mi at sapien tincidunt condimentum sed vel ante.<br></br>
                            Sed venenatis mi at erat fringilla, vel sollicitudin libero fermentum.<br></br>
                            Vivamus rutrum venenatis ultricies.
                        </p>
                    </div>
                    <div>
                        <img class="sameImg" src={require(`../../assets/image/Mazda-RX-7.jpg`)} alt="Projet 1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projet;