import React from "react";

export const Trending = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl">Trending</p>
      <div className="flex gap-5">
        {/* Trending blogs container */}
        <div className="flex w-[1232px] gap-5 justify-between">
          {/* Trending blog 1 */}
          <div className="relative w-[289px] h-[320px] rounded-xl group overflow-hidden cursor-pointer">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-1.png')] bg-cover rounded-xl z-10 object-cover group-hover:scale-110 transition-transform duration-300 ease-in"></div>
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>

          {/* Trending blog 2 */}
          <div className="relative w-[289px] h-[320px] rounded-xl group overflow-hidden cursor-pointer">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-2.png')] bg-cover rounded-xl z-10 object-cover group-hover:scale-110 transition-transform duration-300 ease-in"></div>
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>

          {/* Trending blog 3 */}
          <div className="relative w-[289px] h-[320px] rounded-xl group overflow-hidden cursor-pointer">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-3.png')] bg-cover rounded-xl z-10 object-cover group-hover:scale-110 transition-transform duration-300 ease-in"></div>
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>

          {/* Trending blog 4 */}
          <div className="relative w-[289px] h-[320px] rounded-xl group overflow-hidden cursor-pointer">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Trending-4.png')] bg-cover rounded-xl z-10 object-cover group-hover:scale-110 transition-transform duration-300 ease-in"></div>
            {/* Blog Info */}
            <div className="absolute w-[230px] left-[28px] bottom-[28px] h-[120px] flex flex-col justify-start items-start gap-4 z-30">
              <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md flex justify-center items-center gap-1">
                <div className="text-white text-xs font-medium font-['Work Sans'] leading-tight">
                  Technology
                </div>
              </div>
              <div className="w-[230px] h-[76px] text-white text-lg font-semibold font-['Work Sans'] leading-7">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
