import React from 'react';

function Navs() {
  return (
    <div class="border-b py-[15px] text-base font-Helvetica text-headline bg-secondary flex justify-between">
            <p class="ml-[250px]">Léo Doray</p>
            <div class="mr-[250px] flex">
                <p class="mr-[40px]">Projets</p>
                <p class="mr-[40px]">Langages</p>
                <p class="mr-[40px]">À-Propos</p>
                <button>Contact</button>
            </div>
        </div>
  );
};

export default Navs;
