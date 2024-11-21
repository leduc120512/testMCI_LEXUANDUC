import styles from "./Content-module.scss";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useState } from "react";
// Link
import Content_search_menu from "./Search_Menu";
const cx = classNames.bind(styles);
function Content() {
  //slide right

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://www.mcivietnam.com/media/images/imgDownAWS/event-3.png",
      title:
        "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
      content:
        "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
    },
    {
      img: "https://www.mcivietnam.com/media/images/imgDownAWS/event-3.png",
      title: "Một trải nghiệm khác về học tập trong ngành công nghệ",
      content:
        "Học ngành công nghệ không chỉ là nỗ lực cá nhân mà còn là sự giúp đỡ từ cộng đồng và các giảng viên. Đây là hành trình vượt qua các khó khăn để đạt được ước mơ.",
    },
    {
      img: "https://www.mcivietnam.com/media/images/imgDownAWS/event-3.png",
      title: "Trải nghiệm làm việc thực tế sau khi học ngành DATA",
      content:
        "Sau khi hoàn thành khóa học, em đã tham gia nhiều dự án thực tế và học được cách ứng dụng các kiến thức lý thuyết vào thực tiễn công việc.",
    },
  ];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // slide left
  // State để quản lý nhóm slide hiện tại
  const [activeGroup, setActiveGroup] = useState(0);

  // Dữ liệu slide
  const slideData = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    content: `Slide ${index + 1}`,
  }));

  const itemsPerView = 3; // Số slide hiển thị mỗi lần
  const totalGroups = Math.ceil(slideData.length / itemsPerView); // Tổng số nhóm slide

  // Hàm chuyển đến nhóm kế tiếp
  const showNextGroup = () => {
    setActiveGroup((prev) => (prev + 1) % totalGroups);
  };

  // Hàm chuyển đến nhóm trước đó
  const showPrevGroup = () => {
    setActiveGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  // Tính toán slide hiển thị dựa trên `activeGroup`
  const groupStartIndex = activeGroup * itemsPerView;
  const displayedSlides = slideData.slice(
    groupStartIndex,
    groupStartIndex + itemsPerView
  );
  return (
    <Grid container className="Content">
      {/*// MCI */}
      <Grid md={4} sm={5} xs={12} order={{ xs: 2 }}>
        <div>
          <p className="text_content">Sự Kiện Của MCI</p>
        </div>

        {/* Các slide hiển thị */}
        <div className="content_list">
          {displayedSlides.map((slide) => (
            <div key={slide.id} className="contnet_list-item">
              <p>{slide.content}</p>
            </div>
          ))}
        </div>

        {/* Nút điều hướng */}
        <div className="controls">
          <FontAwesomeIcon
            className={"showPrevGroup_left"}
            onClick={showPrevGroup}
            icon={faAngleLeft}
          />
          <div className="indicators">
            {/*điều huownsgh */}
            {Array.from({ length: totalGroups }).map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === activeGroup ? "active" : ""}`}
                onClick={() => setActiveGroup(index)} // Nhấn vào để chuyển nhóm
              ></span>
            ))}
          </div>
          <FontAwesomeIcon
            className={"showPrevGroup_right"}
            onClick={showNextGroup}
            icon={faAngleRight}
          />
        </div>
      </Grid>
      {/* content <600  */}
      <Grid md={6} sm={6} xs={10} className="Content_right1" order={{ xs: 1 }}>
        <Content_search_menu />
        <Grid container className={cx("list_prvhdsd")}>
          {/* Hiển thị slide hiện tại */}
          <Grid container className="Content_list_right_main">
            <Grid className="content_img_conent" item md={5.5} xs={12}>
              <img src={slides[currentSlide].img} alt="Slide Content" />
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="Contnet-Title-content">
                {slides[currentSlide].title}
              </p>
              <p className="Contnet-Titler-content-list">
                {slides[currentSlide].content}
              </p>
              <p className="Contnet-Titler-more">Xem thêm</p>
            </Grid>
          </Grid>

          {/* Nút điều hướng */}

          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={prevSlide}
            className={"prev_faAngleRight"}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={nextSlide}
            className={"nextfaAngleRight"}
          />
          {/* Điểm chỉ số */}
        </Grid>
      </Grid>
      {/* content > 600  */}
      <Grid md={6} sm={6} xs={12} className="Content_right" order={{ xs: 3 }}>
        <Grid container>
          <Grid item md={12} xs={12}>
            <Content_search_menu />
          </Grid>
        </Grid>
        <Grid container>
          <Grid container className="Content_list_right_main">
            <Grid className="content_img_conent" item md={5.5} xs={12}>
              <img
                src={
                  "https://www.mcivietnam.com/media/images/imgDownAWS/event-3.png"
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="Contnet-Title-content">
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt
                qua nó như nào
              </p>
              <p className="Contnet-Titler-content-list">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
              <p className="Contnet-Titler-more">Xem thêm</p>
            </Grid>
          </Grid>

          <Grid container className="Content_list_right_main">
            <Grid className="content_img_conent" item md={5.5} xs={12}>
              <img
                src={
                  "https://www.mcivietnam.com/media/images/imgDownAWS/event-3.png"
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="Contnet-Title-content">
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt
                qua nó như nào
              </p>
              <p className="Contnet-Titler-content-list">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
              <p className="Contnet-Titler-more">Xem thêm</p>
            </Grid>
          </Grid>

          <Grid container className="Content_list_right_main">
            <Grid className="content_img_conent" item md={5.5} xs={12}>
              <img
                src={
                  "https://www.mcivietnam.com/media/images/imgDownAWS/event-3.png"
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="Contnet-Title-content">
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt
                qua nó như nào
              </p>
              <p className="Contnet-Titler-content-list">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
              <p className="Contnet-Titler-more">Xem thêm</p>
            </Grid>
          </Grid>

          <Grid container className="Content_list_right_main">
            <Grid className="content_img_conent" item md={5.5} xs={12} sm={12}>
              <img
                src={
                  "https://www.mcivietnam.com/media/images/imgDownAWS/event-3.png"
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <p className="Contnet-Title-content">
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt
                qua nó như nào
              </p>
              <p className="Contnet-Titler-content-list">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
              <p className="Contnet-Titler-more">Xem thêm</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Library  */}
      <Grid container className="Content_Library" order={{ xs: 4 }}>
        <p className="Content_Library_title">Thư Viện Ảnh</p>
        <Grid container className="Content_Library_list">
          <Grid item md={6} className="content_library_item">
            <img
              className={"content_library_item212_img"}
              src={
                "https://www.mcivietnam.com/media/images/imgDownAWS/background2.png"
              }
            />
          </Grid>
          <Grid item md={3} xs={6} className="content_library_item1">
            <img
              className={"content_library_item212_img"}
              src={"https://www.mcivietnam.com/media/home/student/fb_hv_1.jpg"}
            />
          </Grid>
        </Grid>
        <Grid container className="Content_Library_list">
          <Grid item md={3} xs={6} className="content_library_item1">
            <img
              className={"content_library_item212_img"}
              src={"https://www.mcivietnam.com/media/home/student/fb_hv_1.jpg"}
            />
          </Grid>
          <Grid item md={6} className={cx("content_library_item212")}>
            <img
              className={"content_library_item212_img"}
              src={
                "https://www.mcivietnam.com/media/images/imgDownAWS/background2.png"
              }
            />
          </Grid>
        </Grid>
      </Grid>

      {/* academy  */}
      <Grid className="Content-academy" container order={{ xs: 5 }}>
        <p className="Content_Library_title">Chương trình đào tạo của MCI</p>
        <Grid container className="Content-academy_list">
          <Grid item md={2} sm={5} xs={4} className="Content-acadamy_item">
            <Grid className="Content_img_list_academy">
              <img
                className={"content_library_item212_img1"}
                src={
                  "https://www.mcivietnam.com/media/home/student/fb_hv_1.jpg"
                }
              />
            </Grid>
            <p className="Content_title_academy">Phân Tích Dữ Liệu</p>
            <p className="Content_content_academy">
              {" "}
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
              thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó,
              em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ
              thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ
              điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn
              mà chỉ...
            </p>
          </Grid>
          <Grid item md={2} sm={5} xs={4} className="Content-acadamy_item">
            <Grid className="Content_img_list_academy">
              <img
                className={"content_library_item212_img1"}
                src={
                  "https://www.mcivietnam.com/media/home/student/fb_hv_1.jpg"
                }
              />
            </Grid>
            <p className="Content_title_academy">Phân Tích Dữ Liệu</p>
            <p className="Content_content_academy">
              {" "}
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
              thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó,
              em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ
              thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ
              điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn
              mà chỉ...
            </p>
          </Grid>
          <Grid item md={2} sm={5} xs={4} className="Content-acadamy_item">
            <Grid className="Content_img_list_academy">
              <img
                className={"content_library_item212_img1"}
                src={
                  "https://www.mcivietnam.com/media/home/student/fb_hv_1.jpg"
                }
              />
            </Grid>
            <p className="Content_title_academy">Phân Tích Dữ Liệu</p>
            <p className="Content_content_academy">
              {" "}
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
              thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó,
              em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ
              thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ
              điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn
              mà chỉ...
            </p>
          </Grid>
          <Grid item md={2} sm={5} xs={4} className="Content-acadamy_item">
            <Grid className="Content_img_list_academy">
              <img
                className={"content_library_item212_img1"}
                src={
                  "https://www.mcivietnam.com/media/home/student/fb_hv_1.jpg"
                }
              />
            </Grid>
            <p className="Content_title_academy">Phân Tích Dữ Liệu</p>
            <p className="Content_content_academy">
              {" "}
              Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
              thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó,
              em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ
              thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ
              điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn
              mà chỉ...
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Content;
