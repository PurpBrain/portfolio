import React from 'react';

function Navs() {
  return (
    <div className="z-50 fixed w-full border-b py-[15px] text-base font-Helvetica text-headline bg-secondary flex justify-between">
            <p className="ml-[250px]">Léo Doray</p>
            <div className="mr-[250px] flex">
                <p className="mr-[40px]">Projets</p>
                <p className="mr-[40px]">Langages</p>
                <p className="mr-[40px]">À-Propos</p>
                <button>Contact</button>
            </div>
        </div>
  );
};

export default Navs;
