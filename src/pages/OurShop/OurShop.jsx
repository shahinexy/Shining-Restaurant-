import FixedBenner from "../../components/FixedBenner";
import benner from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const OurShop = () => {
  const categories = ["salad", "pizza", "suops", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
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
        <div>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>soups</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {salad.map((data) => (
                  <FoodCard key={data._id} data={data}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {pizza.map((data) => (
                  <FoodCard key={data._id} data={data}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {soup.map((data) => (
                  <FoodCard key={data._id} data={data}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {dessert.map((data) => (
                  <FoodCard key={data._id} data={data}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {drinks.map((data) => (
                  <FoodCard key={data._id} data={data}></FoodCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
