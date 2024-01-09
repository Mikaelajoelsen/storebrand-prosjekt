import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";

const navigation = [
  { name: "Privat", href: "#", current: true },
  { name: "Bedrift", href: "#", current: false },
  { name: "Om oss", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const SearchBar = () => (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => setIsSearchVisible(true)}
      onMouseLeave={() => setIsSearchVisible(false)}
    >
      <button type="button" className="relative h-full p-1">
        <FiSearch className="w-6 h-6" />
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Søk.....</span>
      </button>
      <input
        type="text"
        placeholder="Søk....."
        className={`w-full h-full py-2 pl-8 pr-4 border border-red-500 focus:outline-none focus:border-red-900 ${
          isSearchVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out`}
        aria-label="Search"
      />
    </div>
  );

  const LoginButtonWithIcon = () => (
    <button
      type="button"
      className={classNames(
        "flex items-center px-3 py-2 ml-4 text-red-900",
        "hover:bg-red-100 w-1/2 hover:text-red-900 hover:border-t-4 border-red-700 rounded-none h-full justify-center"
      )}
    >
      <FiUser className="ml-1 text-l" /> Logg inn
    </button>
  );

  const MeldSkadeButton = () => (
    <button
      type="button"
      className={classNames(
        "flex items-center px-3 py-2 ml-4 text-red-900",
        "hover:bg-gray-200 w-1/2 hover:text-red-900 border border-black rounded-full h-full justify-center"
      )}
    >
      {" "}
      Meld Skade
    </button>
  );

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex w-cover">
            <div className="w-full p-4 mx-auto">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center h-full p-2 text-red-900 hover:border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FiX className="block h-6" aria-hidden="true" />
                    ) : (
                      <FiMenu className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center">
                  <img
                    className="object-contain w-36 h-36"
                    src="/storebrand-logo.svg"
                    alt="Logo"
                  />
                  <div className="hidden ml-6 sm:block">
                    <div className="flex h-full space-x-4 w-72">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-red-900 hover:bg-red-100 hover:text-red-900 hover:border-t-4 border-red-700"
                              : "text-red-900 hover:bg-red-100 hover:text-red-900 hover:border-t-4 border-red-700",
                            "px-3 py-2 text-l font-bold h-full"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <SearchBar />
                  <LoginButtonWithIcon />
                  <MeldSkadeButton />
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
                        ? "bg-red-900 text-red-200"
                        : "text-red-300 hover:bg-red-700 hover:text-red-300",
                      "block px-3 py-2 text-base font-medium h-full"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
