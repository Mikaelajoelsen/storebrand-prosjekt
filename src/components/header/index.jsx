import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchSection from "../search-section";

const navigation = [
  { name: "Privat", href: "#", current: true },
  { name: "Bedrift", href: "#", current: false },
  { name: "Om oss", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-inherit">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:flex-wrap">
              <div className="flex items-center">
                <img
                  className="h-4 sm:h-4"
                  src="storebrand-logo.svg"
                  alt="Your Company"
                />
                <button type="button" className="ml-3 btn-menu sm:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </button>
              </div>

              <div className="flex-grow hidden ml-6 sm:flex sm:items-center place-content-between">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "hover:bg-red-100 text-red-800 rounded-none hover:border-t-4 hover:border-red-900"
                          : "text-red-900 hover:bg-red-100 hover:text-red-900 rounded-none hover:border-t-4 hover:border-red-900",
                        "rounded-md px-3 py-2 text-m font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <section className="flex">
                  <SearchSection />
                </section>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex justify-end">
              <button type="button" className="btn-mobile">
                Additional Button
              </button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-red-900"
                      : "text-red-900 hover:bg-gray-700 hover:text-red-900",
                    "block rounded-md px-3 py-2 text-base font-medium"
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
  );
}
