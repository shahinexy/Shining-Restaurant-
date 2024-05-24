import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { FaDeleteLeft } from "react-icons/fa6";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authoraization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      if (res.data) {
        Swal.fire({
          title: "Maked Admin!",
          text: "User has been Promoted.",
          icon: "success",
        });
        refetch();
      }
    });
  };

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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="border shadow-xl shadow-black p-7">
      <div className="flex">
        <h2 className="text-2xl font-bold">Total User: {data?.length}</h2>
      </div>
      <div className="my-7">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn></TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Roll</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.map((data, idx) => (
              <TableRow key={data._id}>
                <TableCell>{idx}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>
                  {data?.role ? 'Admin' : <button onClick={()=> handleMakeAdmin(data._id)}>
                    <FaUser className="text-orange-400 text-3xl"></FaUser>
                  </button>}
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

export default AllUser;
