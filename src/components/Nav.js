import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'À-Propos', top: '460', current: false },
  { name: 'Projets', top: '1250', current: true },
  { name: 'Langages', top: '2700', current: false },
  { name: 'Contact', top: '3200', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navs = () => {

  return (
    <Disclosure as="nav" className="bg-secondary">
      {({ open }) => (
        <>
          <div className="border-b bg-secondary w-full z-30 fixed xl:px-[250px] lg:px-[100px] md:px-[50px] px-[20px] text-base font-Helvetica text-headline">
            <div className="flex h-16 items-center justify-between">
              <a href='/'>Léo Doray</a>
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
                    <button
                      key={item.name}
                      onClick={() =>
                        window.scrollTo({
                          left: 0,
                          top: `${item.top}`,
                          behavior: "smooth",
                        })
                      }
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'hover:text-white/75 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
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
