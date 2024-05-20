import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({ data }) => {
  const { name, recipe, image, _id, price } = data;
  const { user } = useContext(authContext);
  const axisoSecure = useAxiosSecure()

  const navigate = useNavigate();
  const location = useLocation();

  const handleCart = (data) => {
    if (user && user.email) {
      const cartItem = {
        menuID: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axisoSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })


    } else {
      Swal.fire({
        title: "You are not logged yet",
        text: "Go to login fast",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className=" text-center bg-gray-300">
      <img className="w-full" src={image} alt="" />
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{recipe}</p>
        <Button
          onClick={() => handleCart(data)}
          color="warning"
          variant="bordered"
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
