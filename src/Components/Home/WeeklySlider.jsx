import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const WeeklySlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={3}
      spaceBetween={20}
      className="my-10"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="flex flex-col justify-between bg-cover bg-center bg-no-repeat p-6 rounded-lg min-h-[250px] text-white"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/tgdPT9jd/upscalemedia-transformed-2.jpg')",
          }}
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold bg-white text-orange-600 inline-block px-3 py-1 rounded-full">
              Only This Week
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Quality eggs at an <br /> affordable price
            </h2>
            <p className="text-gray-700 text-sm">Eat one every day</p>
          </div>
          <button className="mt-4 inline-flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 w-max">
            Shop Now →
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="flex flex-col justify-between bg-cover bg-center bg-no-repeat p-6 rounded-lg min-h-[250px] text-white"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/SK2pp59Z/upscalemedia-transformed-1.jpg')",
          }}
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold bg-white text-orange-600 inline-block px-3 py-1 rounded-full">
              Only This Week
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Snacks that nourishes <br /> our mind and body
            </h2>
            <p className="text-gray-700 text-sm">Shine the morning...</p>
          </div>
          <button className="mt-4 inline-flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 w-max">
            Shop Now →
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="flex flex-col justify-between bg-cover bg-center bg-no-repeat p-6 rounded-lg min-h-[250px] text-white"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/D06BYr2r/upscalemedia-transformed-3.jpg')",
          }}
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold bg-white text-orange-600 inline-block px-3 py-1 rounded-full">
              Only This Week
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Snacks that nourishes <br /> our mind and body
            </h2>
            <p className="text-gray-700 text-sm">Shine the morning...</p>
          </div>
          <button className="mt-4 inline-flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 w-max">
            Shop Now →
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div
          className="flex flex-col justify-between bg-cover bg-center bg-no-repeat p-6 rounded-lg min-h-[250px] text-white"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/tgdPT9jd/upscalemedia-transformed-2.jpg')",
          }}
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold bg-white text-orange-600 inline-block px-3 py-1 rounded-full">
              Only This Week
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Quality eggs at an <br /> affordable price
            </h2>
            <p className="text-gray-700 text-sm">Eat one every day</p>
          </div>
          <button className="mt-4 inline-flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 w-max">
            Shop Now →
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 5 */}
      <SwiperSlide>
        <div
          className="flex flex-col justify-between bg-cover bg-center bg-no-repeat p-6 rounded-lg min-h-[250px] text-white"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/pTkk5LMY/9eae8e82cdf515a0ef94e9d076eccb85b50a63da.jpg')",
          }}
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold bg-white text-orange-600 inline-block px-3 py-1 rounded-full">
              Only This Week
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Unbeatable quality, <br /> unbeatable prices
            </h2>
            <p className="text-gray-700 text-sm">
              Only this week. Don’t miss...
            </p>
          </div>
          <button className="mt-4 inline-flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 w-max">
            Shop Now →
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WeeklySlider;
