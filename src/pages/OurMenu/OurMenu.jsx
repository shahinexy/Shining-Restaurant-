import FixedBenner from "../../components/FixedBenner";
import benner from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import SectionMenu from "../../components/SectionMenu";
import dessertBenner from "../../assets/menu/dessert-bg.jpeg";
import pizzaBenner from "../../assets/menu/pizza-bg.jpg";
import saladBenner from "../../assets/menu/salad-bg.jpg";
import soupBenner from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const { menuItems } = useMenu();
  const offered = menuItems.filter((item) => item.category === "offered");
  const dessert = menuItems.filter((item) => item.category === "dessert");
  const pizza = menuItems.filter((item) => item.category === "pizza");
  const salad = menuItems.filter((item) => item.category === "salad");
  const soup = menuItems.filter((item) => item.category === "soup");
  return (
    <div>
      <FixedBenner
        img={benner}
        title={"our menu"}
        des={"Would you like to try a dish?"}
        bg={"bg-black/50"}
        height={"h-screen"}
        text={"text-white"}
      ></FixedBenner>

      <div className="max-w-7xl mx-auto my-24">
        <SectionTitle
          subTitle={"Don't miss"}
          title={"Today's offer"}
        ></SectionTitle>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {offered.map((data) => (
            <SectionMenu key={data._id} data={data}></SectionMenu>
          ))}
        </div>

        <div className="my-24">
          <FixedBenner
            title={"dessert"}
            des={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            img={dessertBenner}
          ></FixedBenner>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {dessert.map((data) => (
            <SectionMenu key={data._id} data={data} img></SectionMenu>
          ))}
        </div>


        <div className="my-24">
          <FixedBenner
            title={"pizza"}
            des={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            img={pizzaBenner}
          ></FixedBenner>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {pizza.map((data) => (
            <SectionMenu key={data._id} data={data} img></SectionMenu>
          ))}
        </div>


        <div className="my-24">
          <FixedBenner
            title={"salad"}
            des={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            img={saladBenner}
          ></FixedBenner>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {salad.map((data) => (
            <SectionMenu key={data._id} data={data} img></SectionMenu>
          ))}
        </div>


        <div className="my-24">
          <FixedBenner
            title={"soups"}
            des={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            img={soupBenner}
          ></FixedBenner>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {soup.map((data) => (
            <SectionMenu key={data._id} data={data} img></SectionMenu>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
