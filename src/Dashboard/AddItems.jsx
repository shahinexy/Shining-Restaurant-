import { useForm } from "react-hook-form";
import SectionTitle from "../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxoisPublic from "../hooks/useAxoisPublic";


const AddItems = () => {
  const axiosPublic = useAxoisPublic()
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`,imageFile, {
      headers: {
        'content-type' : 'multipart/form-data' 
      }
    })
    console.log(res.data);
  };

  return (
    <div className="border shadow-xl shadow-black p-7">
      <SectionTitle
        subTitle={`What's new`}
        title={"Add an item"}
      ></SectionTitle>
      <div className="my-7 sm:px-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full">
            <p>Recipe Name</p>
            <input
              {...register("name")}
              className="px-5 py-3 w-full"
              type="text"
              placeholder="recipe name"
            />
          </div>
          <div className="flex gap-10">
            <div className="w-full">
              <p>Category</p>
              <select {...register("category")} className="px-5 py-3 w-full">
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soupe">Soupe</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="w-full">
              <p>Price</p>
              <input
                {...register("price")}
                className="px-5 py-3 w-full"
                type="number"
                placeholder="recipe price"
              />
            </div>
          </div>
            <div className="w-full">
                <p>Recitpe Details</p>
                <textarea {...register("recipe")} className="px-5 py-3 w-full" rows={5} placeholder="recipe details"></textarea>
            </div>
            <div className="w-full pb-3">
                <input  {...register("image")} type="file" />
            </div>
            <button className="rounded-none bg-orange-500 flex gap-2 items-center px-4 py-2">Add Item <FaUtensils/></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
