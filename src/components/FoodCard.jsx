import { Button } from "@nextui-org/react";

const FoodCard = ({data}) => {
    const {name, recipe,image } = data;

  return (
    <div className=" text-center bg-gray-300">
      <img className="w-full" src={image} alt="" />
    <div className="p-4 space-y-4">
    <h3 className="text-xl font-semibold">{name}</h3>
      <p>
        {recipe}
      </p>
      <Button color="warning" variant="bordered" >
        ADD TO CART
      </Button>
    </div>
    </div>
  );
};

export default FoodCard;
