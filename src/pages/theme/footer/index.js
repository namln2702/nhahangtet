import { memo } from "react";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

import "./style.scss";
import {
  AiFillAccountBook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitch,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_one">
              <h1 className="footer_one_logo">Nguyen Nam Shop</h1>
              <ul>
                <li>Địa chỉ: GS2 Vinhomes Smart City</li>
                <li>Phone : 0392027911 </li>
                <li>Email : nguyennam@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h6>Cửa hàng</h6>
            <div className="footer-widget">
              <ul>
                <li>
                  <Link to={""}>Liên hệ</Link>
                </li>
                <li>
                  <Link to={""}>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to={""}>Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to={""}>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to={""}>Danh sách yêu thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <h6>Khuyến mãi & ưu đãi</h6>

            <div className="footer-widget">
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập email" />
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>

                <div className="footer_widget_social">
                  <div>
                    <CiFacebook />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <CiTwitter />
                  </div>
                  <div>
                    <FaLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
