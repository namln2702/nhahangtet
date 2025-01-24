import Breadcrumb from "pages/theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";

const Product = () => {
  const sorts = [
    "Thấp đến cao",
    "Cao đến thấp",
    "Mới nhất",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];
  const categories = [
    "Thịt tươi",
    "Rau củ",
    "Nước trái cây",
    "Trái cây",
    "Hải sản",
  ];
  return (
    <>
      <Breadcrumb />

      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="sidebar">
              <div className="sidebar_item">
                <h2>Tim kiem</h2>
                <input type="text" className="input" />
              </div>
              <div className="sidebar_item">
                <h2>Muc gia</h2>
                <div className="price_range_wrap">
                  <div>
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div>
                    <p>Đến:</p>
                    <input type="number" min={0} />
                  </div>
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {sorts.map((item, index) => (
                    <div
                      key={index}
                      className={`tag ${index === 0 ? "active" : ""}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar_item">
                <h2>Thể loại khác</h2>
                <ul>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={ROUTERS.USER.PRODUCT}>{category}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9">Danh sach</div>
        </div>
      </div>
    </>
  );
};

export default Product;
