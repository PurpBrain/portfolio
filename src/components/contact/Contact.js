import React from "react";

const Contact = () => {
    return(
        <div className="px-[250px] py-[50px] relative">
            <div className="flex justify-center text-5xl text-headline font-Brown pb-[100px]">Comment me contacter</div>
            <div className="flex gap-x-5 justify-center">
                <a className="flex bg-primary p-[10px] hover:w-2/6 hover:bg-tertiary rounded-lg" href="https://www.linkedin.com/in/l%C3%A9o-doray-529506203/">
                    <img src={require(`../../assets/image/linkedin.png`)} alt="Linkedin Léo Doray"></img>
                    <div className="overflow-hidden w-0 hover:w-9">
                        <span>in/léo-doray</span>
                    </div>
                </a>
                <a className="bg-primary p-[10px] hover:bg-tertiary rounded-lg" href="https://www.instagram.com/leo_dr72/">
                    <img src={require(`../../assets/image/instagram.png`)} alt="Linkedin Léo Doray"></img>
                </a>
                <a className="bg-primary p-[10px] hover:bg-tertiary rounded-lg" href="https://github.com/PurpBrain">
                    <img src={require(`../../assets/image/github.png`)} alt="Linkedin Léo Doray"></img>
                </a>
                <a className="bg-primary hover:bg-tertiary p-[10px] rounded-lg" href="/">
                    <img src={require(`../../assets/image/mail.png`)} alt="Linkedin Léo Doray"></img>
                </a>
            </div>
        </div>
    );
};

export default Contact;