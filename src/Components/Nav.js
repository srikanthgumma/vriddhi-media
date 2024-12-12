import React from 'react'
import { MdMenu } from "react-icons/md";
import { navLinks } from '../Data/Data'
import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Nav = ({ nav }) => {


  return (
    <header >
      <Disclosure as="nav" className={`w-full ${nav ? "fixed bg-gray-900 duration-300 top-0 left-0 z-30 text-white" : "absolute"}`}>
        <div className="mx-auto max-w-full p-2  sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center text-2xl lg:4xl xl:3xl sm:text-3xl' text-white mr-14 font-sans font-bold">
              Vriddhi Media
              </div>
              <div className="max-md:hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className='text-gray-300 hover:text-white font-sans  rounded-md  px-3 py-2 text-sm font-bold '
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative  rounded-full lg:hidden xl:hidden max-xl:hidden max-md:flex   max-w-[768]:flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <MdMenu color='black'  size={28}/>
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-1 w-28 origin-top-right rounded-md bg-gray-800 mr-8   py-0 top-0 shadow-lg  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href='#home'
                      className="block px-4 py-2 text-sm text-white  "
                    >
                      Home
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#about'
                      className="block px-4 py-2 text-sm text-white  "
                    >
                      About
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#contact'
                      className="block px-4 py-2 text-sm text-white  "
                    >
                      Contact
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#services'
                      className="block px-4 py-2 text-sm text-white  "
                    >
                      Services
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#gallery'
                      className="block px-4 py-2 text-sm text-white  "
                    >
                      Gallery
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
    </header>
  )
}

export default Nav