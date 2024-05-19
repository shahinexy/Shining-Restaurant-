import SectionTitle from "../../components/SectionTitle";
import Testimonial from "./Testimonial";

const ReviewSection = () => {
    return (
        <div>
            <SectionTitle subTitle={'What Our Clients Say'} title={'TESTIMONIALS'}></SectionTitle>

            <Testimonial></Testimonial>
        </div>
    );
};

export default ReviewSection;