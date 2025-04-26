import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



const TopSlider = () => {

    // json data
    const products = [
        {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          image: "https://i.postimg.cc/pTkk5LMY/9eae8e82cdf515a0ef94e9d076eccb85b50a63da.jpg",
          price: 19.99,
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description of Product 2",
          image: "https://i.postimg.cc/pTkk5LMY/9eae8e82cdf515a0ef94e9d076eccb85b50a63da.jpg",
          price: 29.99,
        },
        {
          id: 3,
          name: "Product 3",
          description: "Description of Product 3",
          image: "https://i.postimg.cc/pTkk5LMY/9eae8e82cdf515a0ef94e9d076eccb85b50a63da.jpg",
          price: 39.99,
        },
      ];

  return (
    <div className="lg:w-[1050px]  mx-auto px-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide key={item}>
            <div
              className=" flex items-center justify-start bg-cover bg-center rounded-2xl min-h-[400px] overflow-hidden shadow-md p-6 md:p-12"
              style={{
                backgroundImage:
                  "url('https://i.postimg.cc/pTkk5LMY/9eae8e82cdf515a0ef94e9d076eccb85b50a63da.jpg')",
              }}
            >

              {/* Content */}
              <div className="relative z-10 max-w-xl space-y-6">
                <button className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">
                  Weekend Discount
                </button>

                <h2 className="text-3xl md:text-5xl font-extrabold text-[#39245F] leading-tight">
                  Get the best quality <br /> products at the lowest prices
                </h2>

                <p className="text-black font-bold text-base">
                  We have prepared special discounts for you on grocery
                  products. <br /> Don't miss these opportunities...
                </p>

                <div className="flex items-center gap-6">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-6 py-3 rounded-lg">
                    Shop Now
                  </button>

                  <div>
                    <div className="text-[#DC2626] text-3xl font-bold">
                      3000,BD
                      <span className="text-[#111827] text-2xl font-normal line-through ml-3">
                        4000,BD
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Don't miss this limited time offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;
