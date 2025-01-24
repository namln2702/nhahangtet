import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import banner1 from "assets/users/images/categories/image1.jpg";
import banner2 from "assets/users/images/categories/image2.jpg";
import banner3 from "assets/users/images/categories/image3.jpg";
import banner4 from "assets/users/images/categories/image4.jpg";
import banner5 from "assets/users/images/categories/image5.jpg";
import bannerEnd1 from "assets/users/images/banner/banner1.jpg";

import { data, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "utils/formater";

console.log(banner1);

const sliderItems = [
  {
    bgImg: banner1,
    name: "Cà chua",
  },
  {
    bgImg: banner2,
    name: "Cà rốt vàng",
  },
  {
    bgImg: banner3,
    name: "Ngô",
  },
  {
    bgImg: banner4,
    name: "Bí đỏ",
  },
  {
    bgImg: banner5,
    name: "Cà chua tươi",
  },
];

const featproducts = {
  all: {
    title: "Toàn bộ",
    products: [
      {
        img: banner1,
        name: "Chuối",
        price: 20000,
      },
      {
        img: banner2,
        name: "Chuối",
        price: 20000,
      },
      {
        img: banner3,
        name: "Chuối",
        price: 20000,
      },
      {
        img: banner4,
        name: "Chuối",
        price: 20000,
      },
      {
        img: banner5,
        name: "Chuối",
        price: 20000,
      },
    ],
  },
  fresh: {
    title: "Toan bo",
    products: [
      {
        img: banner4,
        name: "Thit bo nac",
        price: 20000,
      },
      {
        img: banner3,
        name: "Chuối",
        price: 20000,
      },
      {
        img: banner2,
        name: "Chuối",
        price: 20000,
      },
      {
        img: banner1,
        name: "Chuối",
        price: 20000,
      },
    ],
  },
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const renderFeaturedProducts = (data) => {
  const tabList = [];
  const tabPanels = [];
  Object.keys(data).forEach((key, index) => {
    tabList.push(<Tab key={index}>{data[key].title}</Tab>);
    const tabPanel = [];
    data[key].products.map((product, index) => {
      tabPanel.push(
        <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xl-6">
          <div className="featured_item">
            <div
              className="featured_item_pic"
              style={{ backgroundImage: `url(${product.img})` }}
            >
              <ul className="featured_item_pic_hover">
                <li>
                  <AiOutlineEye />
                </li>
                <li>
                  <AiOutlineShoppingCart />
                </li>
              </ul>
            </div>
            <div className="featured_item_text">
              <h6>
                <Link to={""}>{product.name}</Link>
                <h5>{formatter(product.price)}</h5>
              </h6>
            </div>
          </div>
        </div>
      );
    });
    tabPanels.push(tabPanel);
  });
  return (
    <Tabs>
      <TabList>{tabList}</TabList>

      {tabPanels.map((product, index) => (
        <TabPanel key={index}>
          <div className="row">{product}</div>
        </TabPanel>
      ))}
    </Tabs>
  );
};
const HomePage = () => {
  return (
    <>
      <div className="container container_category">
        <Carousel responsive={responsive} className="category_slider">
          {sliderItems.map((item, index) => {
            return (
              <div
                key={index}
                className="category_slider_item"
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                }}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
        </Carousel>
        {/* <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel> */}
      </div>
      <div className="container">
        <div className="featured">
          <div className="section_title">
            <h2> San pham noi bat</h2>
          </div>
          <div>{renderFeaturedProducts(featproducts)}</div>
        </div>
      </div>

      <div className="container">
        <div className="banner">
          <div className="banner_pic ">
            <div className="col-lg-6">
              <img src={bannerEnd1} alt="" />
            </div>
            <div className="col-lg-6">
              <img src={bannerEnd1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
