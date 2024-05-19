import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(data => <SwiperSlide key={data._id}>Slide 1</SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonial;
