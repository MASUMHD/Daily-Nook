import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TopSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      spaceBetween={10}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="flex flex-col-reverse md:flex-row items-center bg-cover bg-center bg-no-repeat p-6 md:p-10 rounded-none md:rounded-lg"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/pTkk5LMY/9eae8e82cdf515a0ef94e9d076eccb85b50a63da.jpg')",
          }}
        >
          <div className="w-full  space-y-5">
            <p className=" bg-green-200 text-green-800 inline-block px-3 py-1 rounded-full text-sm font-semibold">
              Weekend Discount
            </p>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold -space-y-10   text-[#39245F]">
              <p>Get the best quality</p> <br /> <p >products at the lowest</p> <br /> <p>prices</p>
            </div>
            <p className="text-[#030712] font-semibold text-lg">
              We have prepared special discounts for you on grocery <br className="hidden md:block"/> products.
              Don't miss these opportunities...
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#634C9F] hover:bg-purple-700 text-white px-3 md:px-8 py-2 rounded-lg">
                Shop Now
              </button>
              <div>
                <p className="text-[#DC2626]  text-2xl">
                  <span className="font-bold">3000,BD</span>{" "}
                  <span className="text-[#111827] line-through text-xl ml-2">
                    4000,BD
                  </span>
                </p>
                <p className="text-gray-500 text-sm">Don't miss this limited time offer.</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="flex flex-col-reverse md:flex-row items-center bg-cover bg-center bg-no-repeat p-6 md:p-10 rounded-none md:rounded-lg"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/SK2pp59Z/upscalemedia-transformed-1.jpg')",
          }}
        >
          <div className="w-full  space-y-5">
            <p className=" bg-green-200 text-green-800 inline-block px-3 py-1 rounded-full text-sm font-semibold">
              Weekend Discount
            </p>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold -space-y-10   text-[#39245F]">
              <p>Get the best quality</p> <br /> <p >products at the lowest</p> <br /> <p>prices</p>
            </div>
            <p className="text-[#030712] font-semibold text-lg">
              We have prepared special discounts for you on grocery <br className="hidden md:block"/> products.
              Don't miss these opportunities...
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#634C9F] hover:bg-purple-700 text-white px-3 md:px-8 py-2 rounded-lg">
                Shop Now
              </button>
              <div>
                <p className="text-[#DC2626]  text-2xl">
                  <span className="font-bold">3000,BD</span>{" "}
                  <span className="text-[#111827] line-through text-xl ml-2">
                    4000,BD
                  </span>
                </p>
                <p className="text-gray-500 text-sm">Don't miss this limited time offer.</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="flex flex-col-reverse md:flex-row items-center bg-cover bg-center bg-no-repeat p-6 md:p-10 rounded-none md:rounded-lg"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/tgdPT9jd/upscalemedia-transformed-2.jpg')",
          }}
        >
          <div className="w-full  space-y-5">
            <p className=" bg-green-200 text-green-800 inline-block px-3 py-1 rounded-full text-sm font-semibold">
              Weekend Discount
            </p>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold -space-y-10   text-[#39245F]">
              <p>Get the best quality</p> <br /> <p >products at the lowest</p> <br /> <p>prices</p>
            </div>
            <p className="text-[#030712] font-semibold text-lg">
              We have prepared special discounts for you on grocery <br className="hidden md:block"/> products.
              Don't miss these opportunities...
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#634C9F] hover:bg-purple-700 text-white px-3 md:px-8 py-2 rounded-lg">
                Shop Now
              </button>
              <div>
                <p className="text-[#DC2626]  text-2xl">
                  <span className="font-bold">3000,BD</span>{" "}
                  <span className="text-[#111827] line-through text-xl ml-2">
                    4000,BD
                  </span>
                </p>
                <p className="text-gray-500 text-sm">Don't miss this limited time offer.</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  
  );
};

export default TopSlider;
