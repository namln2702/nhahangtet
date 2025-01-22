import { memo, useState } from "react";
import "./style.scss";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { formatter } from "utils/formater";
import {
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShopping,
} from "react-icons/ai";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategory, setIsShowCategory] = useState(true);
  const [menus, setMenus] = useState([
    { name: "TRANG CHỦ", path: ROUTERS.USER.HOME, child: [] },
    { name: "CỦA HÀNG", path: "", child: [] },
    {
      name: "SẢN PHẨM",
      path: "",
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Trứng",
          path: "",
        },
      ],
    },
    { name: "BÀI VIẾT", path: "", child: [] },
    { name: "LIÊN HỆ", path: "", child: [] },
  ]);
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul>
                <li>
                  <MdOutlineEmail />
                  nguyennam@gmail.com
                </li>

                <li>Mien phi ship hang tu {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
              <ul>
                <li>
                  <Link to={""}>
                    <CiFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <CiTwitter />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaRegUser />
                    <span>Đăng nhập</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header_logo">
              <h1>Nguyen Nam Shop</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header_menu">
              <ul>
                {menus.map((menu, index) => (
                  <li
                    key={`${index}${menu.name}`}
                    className={index === 0 ? "active" : "noActive"}
                  >
                    <Link to={menu.path}>
                      {menu.name}
                      <ul className="header_menu_dropdown">
                        {menu.child.map((child, index) => (
                          <li key={`${child}${index}`}>
                            <Link to={child.path}>{child.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formatter(100012)}</span>
              </div>
              <ul>
                <li>
                  <Link to={"#"}>
                    <AiOutlineShopping />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_category_container">
          <div className="col-lg-3 hero_category">
            <div
              className="hero_category_all"
              onClick={() => setIsShowCategory(!isShowCategory)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategory && (
              <div className={isShowCategory ? "" : "hidden"}>
                <ul>
                  <li>
                    <Link to={""}>Thịt gà</Link>
                  </li>
                  <li>
                    <Link to={""}>Rau củ</Link>
                  </li>
                  <li>
                    <Link to={""}>Nước trái cây</Link>
                  </li>
                  <li>
                    <Link to={""}>Trái cây</Link>
                  </li>
                  <li>
                    <Link to={""}>Hải sản</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="col-lg-9 hero_search_container">
            {/* <div className="hero_search"> */}
            <div className="hero_search_form">
              <form>
                <input
                  type=""
                  name=""
                  value=""
                  placeholder="Bạn đang tìm kiếm"
                />
                <button type="submit">Tìm kiếm</button>
              </form>
            </div>
            <div className="hero_search_phone">
              <div className="hero_search_phone_icon">
                <AiOutlinePhone />
              </div>
              <div className="hero_search_phone_text">
                <p>0123456</p>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
            <div className="hero_item">
              <div className="hero_text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả <br />
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to={""} className="primary-btn">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default memo(Header);
