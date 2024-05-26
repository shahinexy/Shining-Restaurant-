import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import useCart from "../hooks/useCart";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axisoSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axisoSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };

  return (
    <div className="border shadow-xl shadow-black p-7">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Total Orders: {cart.length} </h2>
        <h2 className="text-2xl font-bold">Total Orders: {totalPrice} </h2>
        {
          cart.length ? <Link to={'/dashboard/payment'}>
          <button className="px-6 py-2 bg-orange-500 text-white text-lg font-semibold">
            PAY
          </button>
          </Link>
          : 
          <button disabled className="px-6 py-2 bg-orange-500 text-white text-lg font-semibold">
          PAY
        </button>
        }
      </div>
      <div className="my-7">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn></TableColumn>
            <TableColumn>Item Image</TableColumn>
            <TableColumn>Item Name</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {cart.map((data, idx) => (
              <TableRow key={data._id}>
                <TableCell>{idx}</TableCell>
                <TableCell>
                  <img className="w-28" src={data.image} alt="" />
                </TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(data._id)}>
                    <FaDeleteLeft className="text-red-400 text-4xl" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
