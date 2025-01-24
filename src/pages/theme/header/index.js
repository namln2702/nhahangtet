import { memo, useEffect, useState } from "react";
import "./style.scss";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { formatter } from "utils/formater";
import {
  AiOutlineDownCircle,
  AiOutlineFacebook,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShopping,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { BiUser } from "react-icons/bi";
import { ROUTERS } from "utils/router";

const Header = () => {
  const location = useLocation();
  const [isShowCategory, setIsShowCategory] = useState(true);
  const [isShowHumberger, setIsShowHumberger] = useState(true);
  const [menus, setMenus] = useState([
    {
      name: "TRANG CHỦ",
      path: ROUTERS.USER.HOME,
      isShowMenu: false,
      child: [],
    },
    { name: "CỦA HÀNG", path: "", isShowMenu: false, child: [] },
    {
      name: "SẢN PHẨM",
      path: "",
      isShowMenu: true,
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
    { name: "BÀI VIẾT", path: "", isShowMenu: false, child: [] },
    { name: "LIÊN HỆ", path: "", isShowMenu: false, child: [] },
  ]);
  const [isShowHeroItem, setIsShowHeroItem] = useState(
    location.pathname.length <= 1
  );
  const categories = [
    "Thịt tươi",
    "Rau củ",
    "Nước trái cây",
    "Trái cây",
    "Hải sản",
  ];

  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsShowCategory(isHome);
    setIsShowHeroItem(isHome);
  }, [location.pathname.length]);
  return (
    <>
      <div
        className={`humberger_menu_overlay ${isShowHumberger ? "active" : ""}`}
        onClick={() => setIsShowHumberger(!isShowHumberger)}
      ></div>
      <div
        className={`humberger_menu_wrapper ${isShowHumberger ? "show" : ""}`}
      >
        <div className="header_logo">
          <h1>Nguyen Nam Shop</h1>
        </div>
        <div className="humberger_menu_wrapper_cart">
          <div className="humberger_menu_cart">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineShopping /> <span>1</span>
                </Link>
              </li>
            </ul>
            <div className="header_cart_price">
              Gio hang : <span>{formatter(100022)}</span>
            </div>
          </div>
          <div className="humberger_menu_widget">
            <div className="header_top_right_auth">
              <Link to={""}>
                <BiUser />
                <span>Đăng nhập</span>
              </Link>
            </div>
          </div>
          <div className="humberger_menu_nav">
            <ul>
              {menus.map((menu, index) => (
                <li key={index} to={menu.path}>
                  <Link
                    to={menu.path}
                    onClick={() => {
                      const newMenus = [...menus];
                      newMenus[index].isShowMenu = !newMenus[index].isShowMenu;
                      setMenus(newMenus);
                    }}
                  >
                    {menu.name}
                    {menu.child.length > 0 &&
                      (menu.isShowMenu ? (
                        <AiOutlineDownCircle />
                      ) : (
                        <AiOutlineUpCircle />
                      ))}
                  </Link>

                  {menu.isShowMenu && (
                    <ul className="header_menu_dropdown">
                      {menu.child.map((child, index) => (
                        <li key={index}>
                          <Link to={""}>{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="header_top_right_social">
            <Link to={""}>
              <CiFacebook />
            </Link>

            <Link to={""}>
              <FaInstagram />
            </Link>

            <Link to={""}>
              <CiTwitter />
            </Link>

            <Link to={""}>
              <FaLinkedin />
            </Link>
          </div>
          <div className="humberger_menu_contact">
            <ul>
              <li>
                <MdEmail />
                nguyennam@gmail.com
              </li>
              <li>Mien phi don tu {formatter(200000)}</li>
            </ul>
          </div>
        </div>
      </div>
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
          <div className="col-lg-3">
            <div className="header_logo">
              <h1>Nguyen Nam Shop</h1>
            </div>
          </div>

          <div className="col-lg-6">
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
          <div className="col-lg-3">
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
            <div className="humberger_open">
              <AiOutlineMenu
                onClick={() => setIsShowHumberger(!isShowHumberger)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_category_container">
          <div className="col-lg-3 col-md-12 hero_category">
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
                  {categories.map((category, index) => {
                    return (
                      <li key={index}>
                        <Link to={"/product"}>{category}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="col-lg-9 col-md-12 hero_search_container">
            {/* <div className="hero_search"> */}
            <div className="hero_search_form ">
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

            {isShowHeroItem && (
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
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default memo(Header);
