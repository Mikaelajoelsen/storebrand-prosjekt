import { VscArrowRight } from "react-icons/vsc";

export default function Cards() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 bg-red-50 md:max-w-screen">
      <div className="flex flex-col items-center m-8 md:flex-row">
        <div className="flex flex-col justify-start p-4 m-12 space-y-4 md:flex-row md:space-x-4">
          <div className="flex flex-wrap w-full p-20 space-y-4 md:space-y-3 md:space-x-4">
            <h5 className="mb-2 ml-5 text-4xl font-bold text-red-900 dark:text-neutral-50">
              Hva vil du vite mer om?
            </h5>
            <p className="text-red-900 ">Vi hjelper deg med:</p>
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full font-l md:w-36 h-9">
              Bank og lån
            </button>
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full font-l md:w-36 h-9">
              Forsikringer
            </button>
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full font-l md:w-36 h-9">
              Bilforsikring
            </button>
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full font-l md:w-36 h-9">
              Pensjon
            </button>
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full font-l md:w-48 h-9">
              Sparing og investering
            </button>
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full font-l md:w-36 h-9">
              Last ned Kron
            </button>
            <button className="flex items-center justify-center w-full text-red-900 rounded-none font-l md:w-48 h-9">
              Logg inn på dine sider
              <VscArrowRight />
            </button>
          </div>
        </div>
        <img
          className="object-cover w-full h-80 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
          src="holde-lyspære.svg"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 gap-20 p-16 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-row justify-center p-12 bg-red-100 rounded-lg shadow-md w-4/4 h-96">
          <div className="mr-4">
            <img className="w-72" src="bil.svg"></img>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 text-4xl font-bold leading-tight text-red-900 dark:text-red-900">
              Bil Forsikring
            </h5>
            <p className="mb-4 text-xl text-red-900 dark:text-red-900">
              Med Bilforsikring super får du rask opptjening av toppbonus, maks
              10 prosent bonustap ved skade, og parkeringsskade uten bonustap.
            </p>

            <div className="flex flex-col">
              <button
                type="button"
                className="inline-block w-1/2 rounded-full  px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-red-900 border-2 border-red-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Sjekk din pris
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center p-12 bg-red-100 rounded-lg shadow-md w-4/4 h-96">
          <div className="mr-4">
            <img className="w-72" src="bil.svg"></img>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 text-4xl font-bold leading-tight text-red-900 dark:text-red-900">
              Bil Forsikring
            </h5>
            <p className="mb-4 text-xl text-red-900 dark:text-red-900">
              Med Bilforsikring super får du rask opptjening av toppbonus, maks
              10 prosent bonustap ved skade, og parkeringsskade uten bonustap.
            </p>

            <div className="flex flex-col">
              <button
                type="button"
                className="inline-block w-1/2 rounded-full  px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-red-900 border-2 border-red-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Sjekk din pris
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center p-12 bg-red-100 rounded-lg shadow-md w-4/4 h-96">
          <div className="mr-4">
            <img className="w-72" src="bil.svg"></img>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 text-4xl font-bold leading-tight text-red-900 dark:text-red-900">
              Bil Forsikring
            </h5>
            <p className="mb-4 text-xl text-red-900 dark:text-red-900">
              Med Bilforsikring super får du rask opptjening av toppbonus, maks
              10 prosent bonustap ved skade, og parkeringsskade uten bonustap.
            </p>

            <div className="flex flex-col">
              <button
                type="button"
                className="inline-block w-1/2 rounded-full  px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-red-900 border-2 border-red-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Sjekk din pris
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center p-12 bg-red-100 rounded-lg shadow-md w-4/4 h-96">
          <div className="mr-4">
            <img className="w-72" src="bil.svg"></img>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 text-4xl font-bold leading-tight text-red-900 dark:text-red-900">
              Bil Forsikring
            </h5>
            <p className="mb-4 text-xl text-red-900 dark:text-red-900">
              Med Bilforsikring super får du rask opptjening av toppbonus, maks
              10 prosent bonustap ved skade, og parkeringsskade uten bonustap.
            </p>

            <div className="flex flex-col">
              <button
                type="button"
                className="inline-block w-1/2 rounded-full  px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-red-900 border-2 border-red-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Sjekk din pris
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
