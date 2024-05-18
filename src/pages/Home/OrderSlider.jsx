import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slid1 from "../../assets/home/slide1.jpg";
import slid2 from "../../assets/home/slide2.jpg";
import slid3 from "../../assets/home/slide3.jpg";
import slid4 from "../../assets/home/slide4.jpg";
import slid5 from "../../assets/home/slide5.jpg";

import { Pagination } from "swiper/modules";

const OrderSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative mb-20">
            <img className="w-full" src={slid1} alt="" />
            <h3 className="absolute inset-0 flex items-end justify-center pb-5 bg-black/20 text-2xl font-semibold text-white">
              SALADS
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-20">
            <img className="w-full" src={slid2} alt="" />
            <h3 className="absolute inset-0 flex items-end justify-center pb-5 bg-black/20 text-2xl font-semibold text-white">
              SALADS
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-20">
            <img className="w-full" src={slid3} alt="" />
            <h3 className="absolute inset-0 flex items-end justify-center pb-5 bg-black/20 text-2xl font-semibold text-white">
              SALADS
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-20">
            <img className="w-full" src={slid4} alt="" />
            <h3 className="absolute inset-0 flex items-end justify-center pb-5 bg-black/20 text-2xl font-semibold text-white">
              SALADS
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-20">
            <img className="w-full" src={slid5} alt="" />
            <h3 className="absolute inset-0 flex items-end justify-center pb-5 bg-black/20 text-2xl font-semibold text-white">
              SALADS
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderSlider;
