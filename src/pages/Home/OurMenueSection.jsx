import SectionMenu from "../../components/SectionMenu";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";

const OurMenueSection = () => {
  const {menuItems} = useMenu()
  const popularMenu = menuItems.filter(item => item.category === "popular")
  return (
    <div>
      <SectionTitle
        title={`from our menue `}
        subTitle={"Check it out"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {popularMenu?.map((data) => (
          <SectionMenu key={data._id} data={data}></SectionMenu>
        ))}
      </div>
    </div>
  );
};

export default OurMenueSection;
