import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb_text">
        <h2>Nguyen Nam Shop</h2>
        <div className="breadcrumb_option">
          <ul>
            <li className="link">
              <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
            </li>
            <li>Danh sach san pham</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
