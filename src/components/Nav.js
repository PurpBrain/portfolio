import React from 'react';

function Navs() {
  return (
    <navbar className="xl:px-[250px] lg:px-[100px] md:px-[50px] z-50 fixed w-full border-b py-[15px] text-base font-Helvetica text-headline bg-secondary flex justify-between">
      <p>Léo Doray</p>
      <div className="flex ">
        <ul className='flex flex-row'>
          <li className="mr-[40px]">
            <a href='/'>Projets</a>
          </li>
          <li className="mr-[40px]">
            <a href='/'>Langages</a>
          </li>
          <li className="mr-[40px]">
            <a href='/' >À-Propos</a>
          </li>
          <li>
            <a href='/' >Contact</a>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navs;
