import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import banner1 from "assets/users/images/categories/image1.jpg";
import banner2 from "assets/users/images/categories/image2.jpg";
import banner3 from "assets/users/images/categories/image3.jpg";
import banner4 from "assets/users/images/categories/image4.jpg";
import banner5 from "assets/users/images/categories/image5.jpg";

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
const HomePage = () => {
  return (
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
  );
};

export default memo(HomePage);
