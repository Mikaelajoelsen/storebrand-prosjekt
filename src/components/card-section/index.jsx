import { VscArrowRight } from "react-icons/vsc";

export default function Cards() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 bg-red-50 md:max-w-screen lg:flex-wrap">
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
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full lg:h-14 font-l md:w-52">
              Sparing og investering
            </button>
            <button className="flex items-center justify-center w-full text-red-800 border-2 border-red-800 rounded-full font-l md:w-52 lg:h-14">
              Last ned Kron
            </button>
            <button className="flex items-center justify-center w-full text-red-900 rounded-none font-l md:w-48 h-9">
              Logg inn på dine sider
              <VscArrowRight />
            </button>
          </div>
        </div>
        <img
          className="object-cover w-1/2 h-40 md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
          src="holde-lyspære.svg"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg shadow-md md:flex-row md:p-12 lg:h-96">
          <div className="mb-4 md:w-36 md:mr-4 md:mb-0">
            <img className="w-full" src="bil.svg" alt="Car"></img>
          </div>
          <div className="flex flex-col items-center w-full md:items-start">
            <h5 className="mb-2 text-2xl font-bold leading-tight text-center text-red-900 md:text-2xl dark:text-red-900 md:text-left">
              Bil Forsikring
            </h5>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              Med Bilforsikring super får du rask opptjening av toppbonus, maks
              10 prosent bonustap ved skade, og parkeringsskade uten bonustap.
            </p>

            <div className="flex flex-col w-full">
              <button
                type="button"
                className="inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs md:text-sm font-bold uppercase leading-normal text-red-900 border-2 border-red-900"
              >
                Sjekk din pris
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg shadow-md md:flex-row md:p-12 lg:h-96">
          <div className="mb-4 md:w-36 md:mr-4 md:mb-0">
            <img className="w-full" src="money-padlock.svg" alt="Money"></img>
          </div>
          <div className="flex flex-col items-center w-full md:items-start">
            <h5 className="mb-2 text-2xl font-bold leading-tight text-center text-red-900 md:text-2xl dark:text-red-900 md:text-left">
              Fastrente innskudd - 5% sparerente
            </h5>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              Kun 6 måneders binding
            </p>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              - Trygg sparing i Bank
            </p>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              - Ingen minstebeløp
            </p>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              - Innskuddet er bundet i 6 måneder fra opprettelse av sparingen
            </p>

            <div className="flex flex-col w-full">
              <button
                type="button"
                className="inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs md:text-sm font-bold uppercase leading-normal text-red-900 border-2 border-red-900"
              >
                Sjekk din pris
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg shadow-md md:flex-row md:p-12 lg:h-96">
          <div className="mb-4 md:w-36 md:mr-4 md:mb-0">
            <img className="w-full" src="money-padlock.svg" alt="Money"></img>
          </div>
          <div className="flex flex-col items-center w-full md:items-start">
            <h5 className="mb-2 text-2xl font-bold leading-tight text-center text-red-900 md:text-2xl dark:text-red-900 md:text-left">
              Fastrente innskudd - 5% sparerente
            </h5>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              Kun 6 måneders binding
            </p>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              - Trygg sparing i Bank
            </p>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              - Ingen minstebeløp
            </p>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              - Innskuddet er bundet i 6 måneder fra opprettelse av sparingen
            </p>

            <div className="flex flex-col w-full">
              <button
                type="button"
                className="inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs md:text-sm font-bold uppercase leading-normal text-red-900 border-2 border-red-900"
              >
                Sjekk din pris
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg shadow-md md:flex-row md:p-12 lg:h-96">
          <div className="mb-4 md:w-36 md:mr-4 md:mb-0">
            <img className="w-full" src="bil.svg" alt="Car"></img>
          </div>
          <div className="flex flex-col items-center w-full md:items-start">
            <h5 className="mb-2 text-2xl font-bold leading-tight text-center text-red-900 md:text-2xl dark:text-red-900 md:text-left">
              Bil Forsikring
            </h5>
            <p className="mb-4 text-sm text-center text-red-900 md:text-xl dark:text-red-900 md:text-left">
              Med Bilforsikring super får du rask opptjening av toppbonus, maks
              10 prosent bonustap ved skade, og parkeringsskade uten bonustap.
            </p>

            <div className="flex flex-col w-full">
              <button
                type="button"
                className="inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs md:text-sm font-bold uppercase leading-normal text-red-900 border-2 border-red-900"
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
