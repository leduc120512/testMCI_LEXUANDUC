import styles from "./Footer-module.scss";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <Grid container className={cx("footer")}>
      {/* link facebook */}
      <Grid
        item
        md={4}
        xs={5}
        className={cx("footer_img")}
        order={{ xs: 4, md: 1 }}
      >
        <img
          className={"img_footer"}
          src={"https://www.mcivietnam.com/media/home/special_event_banner.png"}
        />
      </Grid>
      {/* hà nội  */}
      <Grid
        className={cx("footer_hotline")}
        item
        md={2}
        xs={5}
        order={{ xs: 1, md: 2 }}
      >
        <p className="footer_title">HÀ NỘI</p>
        <div>
          <p>165 Thái Hà </p>
          <p>
            Hotline <span> 024 7106 8368</span>
          </p>
          <p>
            Địa Chỉ{" "}
            <span>
              Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái Hà, Phường Láng Hạ, Quận Đống
              Đa, Thành phố Hà Nội, Việt Nam
            </span>
          </p>
          <p>30 Trung Liệt</p>
          <p>
            Hotline <span> 024 7106 8368</span>
          </p>
          <p>
            Địa chỉ{" "}
            <span>
              Số 30, Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Thành phố Hà
              Nội, Việt N
            </span>
          </p>
        </div>
      </Grid>
      {/* hcm  */}
      <Grid
        className={cx("footer_hotline")}
        item
        md={2}
        xs={5}
        order={{ xs: 2 }}
      >
        <p className="footer_title">HỒ CHÍ MINH</p>
        <div>
          <p>HCM - 13 Cao Thắng</p>
          <p>
            Hotline: <span>024 7106 8368</span>
          </p>
          <p>
            Địa chỉ:{" "}
            <span>13 Cao Thắng, Phường 2, Quận 3, Thành Phố Hồ Chí Minh</span>
          </p>
        </div>
        <div>
          <p>HCM - 224 Điện Biên Phủ</p>
          <p>
            Hotline: <span>024 7106 8368</span>
          </p>
          <p>
            Địa chỉ:{" "}
            <span>
              Tầng 4 & Tầng 6, 224 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3,
              Thành phố Hồ Chí Minh, Việt Nam
            </span>
          </p>
        </div>
        <div>
          <p>HCM - 677/6 Điện Biên Phủ</p>

          <p>
            Địa chỉ:{" "}
            <span>
              Tầng 4 & Tầng 6, 224 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3,
              Thành phố Hồ Chí Minh, Việt Nam
            </span>
          </p>
        </div>
      </Grid>
      {/* hotline  */}
      <Grid
        className={cx("footer_hotline")}
        item
        md={2}
        xs={5}
        order={{ xs: 3 }}
      >
        <p className="footer_title">HOTLINE</p>
        <div>
          <p>Khiếu nại CEO: 0982 521 378</p>
          <p>Khiếu nại DCEO: 0916 442 368</p>
          <p>Hợp tác truyền thông: 0934 146 016</p>
          <p>Hợp tác kinh doanh: 0961 123 988</p>
          <p>Khiếu nại dịch vụ CSKH: 024 7106 8368</p>
          <p>Tư vấn khóa học 1</p>
          <p>Ms. Khánh Ly 0352 433 233</p>
          <p>Tư vấn khóa học 2</p>
          <p>Ms. Ngọc Linh 0344 463 698</p>
          <p>CSKH: cskh@mcivietnam.com</p>
          <p>Chính sách bảo mật</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
