import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(data => <SwiperSlide key={data._id}>
                    <div className="sm:px-28 p-10 ">
                        <div className="flex justify-center mb-6"><FaQuoteLeft className="text-5xl " /></div>
                        <p className="text-center">{data.details}</p>
                        <p className="text-xl font-semibold text-center text-orange-500 mt-4 uppercase">{data.name}</p>
                    </div>
                </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonial;
