import SectionTitle from "../../components/SectionTitle";
import OrderSlider from "./OrderSlider";


const OnlineOrderSection = () => {
    return (
        <div>
            <SectionTitle subTitle={'From 11:00am to 10:00pm'} title={'order online'}></SectionTitle>
            <OrderSlider></OrderSlider>
        </div>
    );
};

export default OnlineOrderSection;