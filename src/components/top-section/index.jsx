export default function Card() {
  return (
    <div className="flex justify-center mt-24">
      <div className="flex flex-col items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-6xl md:flex-row">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-l-lg"
          src="header-image.jpeg"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-4xl font-bold text-red-900 dark:text-neutral-50">
            Få en god start på det nye året
          </h5>
          <p className="mb-4 text-base text-red-900 dark:text-neutral-200">
            Velkommen til 2024 og nye muligheter! Gjør smarte valg med
            sparepengene dine, få oversikt over pensjonen din og sikre deg og
            dine mot det uforutsette. Vi viser deg hvordan.
          </p>
          <button className="flex items-center justify-center mt-2 ml-4 text-white bg-red-800 border border-red-800 rounded-full font-xl w-52 h-9">
            Invester i fremtiden
          </button>
        </div>
      </div>
    </div>
  );
}
