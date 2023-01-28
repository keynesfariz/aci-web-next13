const ScreenSize = () => (
  <div className="mb-4 font-bold">
    <div className="w-full rounded-md bg-red-200 py-2 text-center text-red-800 sm:hidden">
      XS
    </div>
    <div className="hidden w-full rounded-md bg-orange-200 py-2 text-center text-orange-800 sm:block md:hidden">
      SM
    </div>
    <div className="hidden w-full rounded-md bg-lime-200 py-2 text-center text-lime-800 md:block lg:hidden">
      MD
    </div>
    <div className="hidden w-full rounded-md bg-emerald-200 py-2 text-center text-emerald-800 lg:block xl:hidden">
      LG
    </div>
    <div className="hidden w-full rounded-md bg-sky-200 py-2 text-center text-sky-800 xl:block 2xl:hidden">
      XL
    </div>
    <div className="hidden w-full rounded-md bg-indigo-200 py-2 text-center text-indigo-800 2xl:block">
      2XL
    </div>
  </div>
);

export default ScreenSize;
