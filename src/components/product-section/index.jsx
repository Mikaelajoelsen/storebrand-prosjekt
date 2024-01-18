import { VscArrowRight } from "react-icons/vsc";

export default function Product() {
  return (
    <>
      <h1 className="flex m-20 my-10 text-3xl font-bold sm:text-4xl md:text-3xl lg:text-3xl text-red-950 lg:flex-wrap">
        Produkter og tjenester
      </h1>
      <div className="flex flex-col justify-center w-full p-5 text-xl lg:flex-row gap-36">
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-xl font-bold text-red-950">
            Pensjon og Sparing
          </h2>
          <div className="flex flex-col gap-2">
            {[
              "Alt om pensjon",
              "Alt om sparing",
              "Investeringsappen Kron",
              "Fondsparing",
              "Aksjesparingskonto",
              "Egen pensjonskonto",
              "Egen Pensjonskonto fleksibel",
              "Min pensjon - få oversikt",
              "Smart pensjon tjenesten",
            ].map((text, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center py-2 mb-2 border-b text-red-950 border-red-950 min-w-max"
              >
                {text}
                <VscArrowRight className="ml-2" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-xl font-bold text-red-950">Bank og lån</h2>
          <div className="flex flex-col gap-2">
            {[
              "Alt om bank og lån",
              "Bli bankkunde",
              "Lånekalkulator",
              "Prisliste bank",
              "Start banksparing",
              "Søk boliglån",
              "Søk fastrentelån",
              "Søk forbrukslån",
              "Åpne smartkonto",
            ].map((text, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center py-2 mb-2 border-b text-red-950 border-red-950 min-w-max"
              >
                {text}
                <VscArrowRight className="ml-2" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-xl font-bold text-red-950">Forsikring</h2>
          <div className="flex flex-col gap-2">
            {[
              "Alle forsikringer",
              "Barneforsikring",
              "Bilforsikring",
              "Helseforsikring",
              "Husforsikring",
              "Innboforsikring",
              "Livsforsikring",
              "Reiseforsikring",
              "Sikre deg og dine",
            ].map((text, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center py-2 mb-2 border-b text-red-950 border-red-950 min-w-max"
              >
                {text}
                <VscArrowRight className="ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
