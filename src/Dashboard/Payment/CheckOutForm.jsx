import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState()
  const [error, setError] = useState()
  const [transactionId, setTransactionId] = useState()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [cart, refetch] = useCart()
  const {user} = useContext(authContext)

  const totalPrice = cart.reduce((total, item) => total + item.price ,0)

  // payment intent
  useEffect(()=>{
      if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret)
        })
      }
  },[axiosSecure, totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('')
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
          card: card,
          billing_details: {
            email: user?.email || 'anonymuse',
            name: user?.displayName || 'anonymuse'
          }
        }
    })

    if(confirmError){
      console.log('confirm error');
    }
    else{
      console.log('payment Intent', paymentIntent);
      if(paymentIntent.status === "succeeded"){
        console.log('transaction Id', paymentIntent.id);
        setTransactionId(paymentIntent.id)

        // save payment in the databse
        const payment = {
          email: user.email,
          price: totalPrice,
          transectionId: paymentIntent.id,
          date: new Date(),
          cardIds: cart.map(item => item._id),
          menuCartIds: cart.map(item => item.menuID),
          status: 'pending'
        }

        const res = await axiosSecure.post('/paymens', payment);
        console.log(res.data);
        refetch()
        if(res.data.paymentResult.insertedId){
          toast.success('payment successfull')
        }
      }
    }

  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-orange-500 px-5 py-2 my-5 text-white text-xl font-semibold"
        >
          Pay
        </button>
        <p className="text-sm text-red-500">{error}</p>
        {
          transactionId && <p className="text-sm text-green-500">Your transection Id: {transactionId}</p>
        }
      </form>
    </div>
  );
};

export default CheckOutForm;
