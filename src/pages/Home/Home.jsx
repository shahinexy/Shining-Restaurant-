import HomeSlider from "./HomeSlider";
import OnlineOrderSection from "./OnlineOrderSection";
import FixedBenner from "../../components/FixedBenner";
import benner from "../../assets/home/chef-service.jpg";
import OurMenueSection from "./OurMenueSection";
import ReviewSection from "./ReviewSection";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <div className="max-w-7xl mx-auto px-4 sm:my-28 my-12">
        <OnlineOrderSection></OnlineOrderSection>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:my-28 my-12">
        <FixedBenner
          title={"Bistro Boss"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
          }
          img={benner}
        ></FixedBenner>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:my-28 my-12">
        <OurMenueSection></OurMenueSection>
      </div>
      <div className="flex justify-center">
        <Link to={'/ourShop'}>
          <Button color="warning" variant="bordered" className="uppercase">
            View Full Menu
          </Button>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:my-28 my-12">
        <ReviewSection></ReviewSection>
      </div>
    </div>
  );
};

export default Home;
