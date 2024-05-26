import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
  } from "@nextui-org/react";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const {menuItems, refetch} = useMenu()
    const axisoSecure = useAxiosSecure()

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
            console.log(result);
          if (result.isConfirmed) {
            axisoSecure.delete(`/menu/${id}`).then((res) => {
                console.log(res.data);
              if (res.data.deletedCount > 0) {
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
            <SectionTitle subTitle={'Hurry Up'} title={'Manage All Items'}></SectionTitle>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Total Items: {menuItems.length} </h2>
        </div>
        <div className="my-7">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn></TableColumn>
              <TableColumn>Item Image</TableColumn>
              <TableColumn>Item Name</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Action</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              {menuItems.map((data, idx) => (
                <TableRow key={data._id}>
                  <TableCell>{idx}</TableCell>
                  <TableCell>
                    <img className="w-28" src={data.image} alt="" />
                  </TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.price}</TableCell>
                  <TableCell>
                    <Link to={`/dashboard/updateItem/${data._id}`}>
                    <button >
                      <FaEdit className="text-orange-500 text-4xl" />
                    </button>
                    </Link>
                  </TableCell>
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

export default ManageItems;