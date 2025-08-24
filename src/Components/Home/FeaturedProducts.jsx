import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturedProducts = () => {
  return (
    <main className="mt-2 md:mt-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <h1 className="text-lg md:text-xl font-semibold md:font-bold">
            Featured Products
          </h1>
          <p className="hidden md:block text-sm text-[#9CA3AF]">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <div>
          {/* View All Button */}
          <button className="flex items-center gap-1 font-medium md:font-semibold  md:border border-gray-400 rounded-full px-3 py-[3px] hover:bg-[#634C9F] hover:text-white">
            <span>View All</span> <IoIosArrowRoundForward size={25} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
