import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slid1 from '../../assets/home/01.jpg'
import slid2 from '../../assets/home/02.jpg'
import slid3 from '../../assets/home/03.png'
import slid4 from '../../assets/home/04.jpg'
import slid5 from '../../assets/home/05.png'
import slid6 from '../../assets/home/06.png'

import { Autoplay, Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div>
      <Swiper autoplay={true} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide><img className="w-full h-screen" src={slid1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-screen"  src={slid2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-screen"  src={slid3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-screen"  src={slid4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-screen"  src={slid5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-screen"  src={slid6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
