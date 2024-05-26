import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle title={'Payment'}></SectionTitle>
            
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;