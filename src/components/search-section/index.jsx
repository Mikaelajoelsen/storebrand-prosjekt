import { TfiSearch } from "react-icons/tfi";

export default function SearchSection() {
  return (
    <div className="flex items-center gap-4 font-bold text-red-900 justify-items-end">
      <div className="group flex items-center justify-between gap-2 px-4 border-2 border-solid border-red-100 transition-all ease-in-out min-w-[85px] hover:min-w-[152px]">
        <TfiSearch className="group-hover:hidden" />
        <span>Søk</span>
        <TfiSearch className="hidden group-hover:block" />
      </div>
      <a
        className="p-2 text-red-800 rounded-none hover:bg-red-100 hover:border-t-4 hover:border-red-900"
        href="#"
      >
        Logg inn
      </a>
      <a
        className="p-1 text-red-600 border-2 border-red-900 rounded-full hover:bg-gray-100"
        href="#"
      >
        Meld skade
      </a>
    </div>
  );
}
