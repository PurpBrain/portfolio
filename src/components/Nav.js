import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Projets', href: '#', current: false },
  { name: 'Langages', href: '#', current: false },
  { name: 'À-Propos', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navs() {
  return (
    <Disclosure as="nav" className="bg-secondary">
      {({ open }) => (
        <>
          <div className="border-b bg-secondary w-full z-30 fixed xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] text-base font-Helvetica text-headline">
            <div className="flex h-16 items-center justify-between">
              <p>Léo Doray</p>
              <div className="sm:hidden sm:w-0">
                {/* Mobile menu button*/}
                <Disclosure.Button className="flex rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        ' py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden text-base font-Helvetica text-headline">
            <div className="fixed z-20 text-end pt-[65px] space-y-1 px-2 w-full border-b bg-secondary">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navs;
