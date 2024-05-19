import FixedBenner from "../../components/FixedBenner";
import benner from "../../assets/shop/banner2.jpg";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";

const OurShop = () => {
    const { menuItems } = useMenu();
    const drinks = menuItems.filter((item) => item.category === "drinks");
    const dessert = menuItems.filter((item) => item.category === "dessert");
    const pizza = menuItems.filter((item) => item.category === "pizza");
    const salad = menuItems.filter((item) => item.category === "salad");
    const soup = menuItems.filter((item) => item.category === "soup");
  return (
    <div>
      <FixedBenner
        title={"Our Shop"}
        des={"Would you like to try a dish?"}
        img={benner}
        bg={"bg-black/50"}
        text={"text-white"}
        height={"h-screen"}
      ></FixedBenner>

      {/* ==== Tabs ==== */}
      <div className="max-w-7xl mx-auto px-4 my-24">
        <div className="flex w-full flex-col">
          <Tabs key={'underlined'} variant="underlined" aria-label="Options">
            <Tab key="salad" title="Salad">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {
                        salad.map(data => <FoodCard key={data._id} data={data}></FoodCard>)
                    }
                </div>
            </Tab>
            <Tab key="pizzza" title="Pizza">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {
                        pizza.map(data => <FoodCard key={data._id} data={data}></FoodCard>)
                    }
                </div>
            </Tab>
            <Tab key="soups" title="Soups">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {
                        soup.map(data => <FoodCard key={data._id} data={data}></FoodCard>)
                    }
                </div>
            </Tab>
            <Tab key="dessert" title="Dessert">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {
                        dessert.map(data => <FoodCard key={data._id} data={data}></FoodCard>)
                    }
                </div>
            </Tab>
            <Tab key="drinks" title="Drinks">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {
                        drinks.map(data => <FoodCard key={data._id} data={data}></FoodCard>)
                    }
                </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
