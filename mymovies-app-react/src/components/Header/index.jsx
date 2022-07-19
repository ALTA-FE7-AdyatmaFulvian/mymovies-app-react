import { useLocation } from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import MvlixIcon from "../../assets/MvlixIcon.png";
import { HiMoon, HiSun } from "react-icons/hi";
import { useContext, useState } from "react";
import { ThemeContext } from "../../utils/context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const handleChangeTheme = (mode) => {
    setTheme(mode);
  };

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Favorite", href: "/favorite", current: false },
  ];
  const isActive = navigation.find((value) => value.href === pathname);
  if (isActive) isActive.current = true;

  return (
    <header>
      <Disclosure as="nav" className="bg-white dark:bg-[#031c27]">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={MvlixIcon}
                      alt="mvlix-icon"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={MvlixIcon}
                      alt="mvlix-icon"
                      width="150"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-[#0096D7] font-bold hover:underline hover:underline-offset-4"
                              : "text-black dark:text-white font-bold hover:underline hover:underline-offset-4",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button" className="p-1 rounded-full">
                    {theme === "light" ? (
                      <HiMoon
                        color="dark"
                        size={30}
                        onClick={() => handleChangeTheme("dark")}
                      />
                    ) : (
                      <HiSun
                        color="white"
                        size={30}
                        onClick={() => handleChangeTheme("light")}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-[#0096D7] font-bold"
                        : "text-black dark:text-white font-bold",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
