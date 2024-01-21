export default function Footer() {
  return (
    <footer className="p-4 text-white bg-red-900">
      <div className="flex justify-center gap-2 mx-auto text-center">
        <img
          className="flex h-4 mt-1 items center sm:h-4"
          src="logo-enkel.jpg"
          alt="Your Company"
        />
        <p className="font-bold text-white">Storebrand</p>
      </div>
    </footer>
  );
}
