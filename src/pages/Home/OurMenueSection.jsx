import { useEffect, useState } from "react";
import SectionMenu from "../../components/SectionMenu";
import SectionTitle from "../../components/SectionTitle";

const OurMenueSection = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((data) => data.category === "popular");
        setItems(popularItem);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        title={`from our menue `}
        subTitle={"Check it out"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {items.map((data) => (
          <SectionMenu key={data._id} data={data}></SectionMenu>
        ))}
      </div>
    </div>
  );
};

export default OurMenueSection;
