const SectionMenu = ({ data }) => {
    const {image, recipe, name, price} = data
  return (
    <div className="flex gap-4">
      <img className="w-28 rounded-r-[50%] rounded-bl-[50%]" src={image} alt="" />
      <div>
        <h3 className="text-xl font-semibold uppercase">{name} ----------</h3>
        <p>{recipe}</p>
      </div>

      <p className="text-orange-500 text-base font-semibold">${price}</p>
    </div>
  );
};

export default SectionMenu;
