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
import { AiOutlineShopping } from "react-icons/ai";
import { ROUTERS } from "utils/router";

const Header = () => {
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
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <MdOutlineEmail />
                  nguyennam@gmail.com
                </li>

                <li>Mien phi ship hang tu {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
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
                      <ul>
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
    </>
  );
};

export default memo(Header);
