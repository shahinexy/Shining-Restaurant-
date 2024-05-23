import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxoisPublic from "../../hooks/useAxoisPublic";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(authContext);
  const axiosPublic = useAxoisPublic()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.pass)
    .then(res => {
      console.log(res)
      updateUserProfile(data.name, data.photo)
      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          if(res.data.insertedId){
            console.log('user added in the database')
            navigate('/')
          }
        })
        .catch(err => console.log(err))

      })
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-3xl border border-gray-400">
        <form onSubmit={handleSubmit(onSubmit)} className="p-20">
          <h1 className="text-4xl font-bold mb-8">Register</h1>
          <div>
            <p className="font-semibold">Name</p>
            <input
              {...register("name", { required: true })}
              className="border px-4 py-2"
              type="text"
              placeholder="type here"
            />
            <br />
            {errors.name && (
              <small className="text-red-500">Name is required</small>
            )}
            <p className="font-semibold mt-5">Photo URL</p>
            <input
              {...register("photo", { required: true })}
              className="border px-4 py-2"
              type="text"
              placeholder="type here"
            />
            <br />
            {errors.photo && (
              <small className="text-red-500">photo url is required</small>
            )}
            <p className="font-semibold mt-5">Email</p>
            <input
              {...register("email", { required: true })}
              className="border px-4 py-2"
              type="email"
              placeholder="type here"
            />
            <br />
            {errors.eamil && (
              <small className="text-red-500">Email is required</small>
            )}
            <p className="font-semibold mt-5">Password</p>
            <input
              {...register("pass", {
                required: true,
                maxLength: 20,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
              })}
              className="border px-4 py-2"
              type="password"
              placeholder="type here"
            />
            <br />
            {errors.pass?.type === "required" && (
              <small className="text-red-500">Password is required</small>
            )}
            {errors.pass?.type === "minLength" && (
              <small className="text-red-500">
                Password must be 6 character
              </small>
            )}
            {errors.pass?.type === "pattern" && (
              <small className="text-red-500">
                Password should containe one uppercase, lowercase, number and
                special character{" "}
              </small>
            )}
          </div>
          <button className="mt-10 w-full rounded-none bg-slate-500 py-2">
            Register
          </button>
          <p className="underline text-orange-500 font-bold mt-2">
            <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
