import styles from "./SiderBar-module.scss";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <Grid container className={"lhdsiufg"}>
      <Grid item md={12}>
        {/* barner  */}
        <img
          className={"img_sidebar"}
          src={"https://www.mcivietnam.com/media/home/student/fb_hv_2.jpg"}
        />
        {/* list item academy  */}
        <div className={"list_main_academy"}>
          <p className={"SideBar_list_item"}>Các Khóa Học </p>
          <ul className={"SideBar_list_item_main"}>
            <li>Phân Tích Dữ liệu</li>
            <li>Kĩ Sư Dữ Liệu</li>
            <li>Khoa Học Dữ Liệu</li>
            <li>Lập Trình Ứng Dụng</li>
          </ul>
        </div>

        {/* register academy */}
        <Grid item md={12} className={"register_academy"}>
          <p className={"register-title"}>ĐĂNG KÝ TƯ VẤN KHÓA HỌC</p>
          <div>
            <p className={"list_instructions"}>Họ và Tên</p>
            <input className={"input_list_siderbar"} type="text" />
          </div>
          <div>
            <p className={"list_instructions"}>Họ và Tên</p>
            <input className={"input_list_siderbar"} type="email" />
          </div>
          <div>
            <p className={"list_instructions"}>Họ và Tên</p>
            <input className={"input_list_siderbar"} type="text" />
          </div>
          <div>
            <p className={"list_instructions"}>Họ và Tên</p>
            <select
              className={"input_list_siderbar"}
              name="academy"
              id="academy"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button className={"btn_register"}>ĐĂNG KÝ TƯ VẤN</button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
