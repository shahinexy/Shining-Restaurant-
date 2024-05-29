import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import SectionTitle from "../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(authContext)
 
    const {data: payments, isPending} = useQuery({
        queryKey: ['payment'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/paymens/${user.email}`)
            return res.data;
        }
    })
    if(isPending) return <div className="flex w-full h-screen justify-center items-center"> <Spinner color="warning"/></div>
    return (
        <div className="border shadow-xl shadow-black p-7">
        <SectionTitle subTitle={' ||| '} title={'Payment History'}></SectionTitle>
    <div className="flex justify-between">
      <h2 className="text-2xl font-bold">Total Payments: {payments.length} </h2>
    </div>
    <div className="my-7">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn></TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>transection ID</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Stauts</TableColumn>
          <TableColumn>Date</TableColumn>
        </TableHeader>
        <TableBody>
          {payments.map((data, idx) => (
            <TableRow key={data._id}>
              <TableCell>{idx}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.transectionId}</TableCell>
              <TableCell>{data.price}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>{data.date}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
    );
};

export default PaymentHistory;