import classNames from "classnames/bind";
import styles from "./Blog-module.scss";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Siderbar from "../../defaultLayout/sidebar";
import {
  faAngleLeft,
  faAngleRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// link item
import Search_Menu from "../../defaultLayout/Content/Search_Menu";

const cx = classNames.bind(styles);

function Blog() {
  // slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://www.mcivietnam.com/media/home/special_event_banner.png",
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
      img: "https://www.mcivietnam.com/media/images/imgDownAWS/event-4.png",
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

  return (
    <Grid container className={"Blog_main_main"}>
      <Grid className={"blog_menu_search"} md={8} sm={12} xs={12} order={{ xs: 2}}>
        {/* input search  */}
        <div className={"khsjdf"}>
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <Search_Menu />
        </div>
      </Grid>
      {/* nav link  */}
      <Grid className={"blog_link"} container>
        <Grid className="link_blog_list" item md={9} xs={12} sm={10}>
          <p className="link_blog_list_item">
            Trang chủ{" "}
            <FontAwesomeIcon
              className="link_blog_item_icon"
              icon={faAngleRight}
            />
          </p>
          <p className="link_blog_list_item">
            Blog{" "}
            <FontAwesomeIcon
              className="link_blog_item_icon"
              icon={faAngleRight}
            />
          </p>
          <p className="link_blog_list_item">
            Chia sẻ kinh nghiệm{" "}
            <FontAwesomeIcon
              className="link_blog_item_icon"
              icon={faAngleRight}
            />
          </p>
        </Grid>
      </Grid>
      {/* share experience  */}
      <Grid container className={"blog_Content_main"}>
        <Grid item md={6} sm={8} xs={11}>
            <img
                className={"img_blog"}
                src={
                    "https://www.mcivietnam.com/media/images/imgDownAWS/image39.png"
                } />
          <p className={cx("list_item_title_blog")}>
            Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua
            nó như nào{" "}
          </p>
          <p className={"list_item_content_blog"}>
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </p>
          {/* Content  */}
          <div className="Blog_content">
            <p className="Blog_contnet_tittle">
              <FontAwesomeIcon className="menu_bar_blog" icon={faBars} /> Nội
              Dung Bài Viết
            </p>

            <ol className="list_blog_content" type="1">
              <li>Nội dung bài viết</li>
              <li>Nội dung bài viết</li>
              <li>Nội dung bài viết</li>
              <li>Nội dung bài viết</li>
              <li>Nội dung bài viết</li>
            </ol>
          </div>
          <p className={"list_item_content_blog"}>
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </p>
          <p className={"list_item_content_blog"}>
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ..
          </p>
          <p className={"list_item_content_blog"}>
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </p>
          {/* img share experience  */}

                <Grid md={12} xs={12} order={{ xs: 1 }}>
                    <img
                    className={"img_blog"}
                    src={
                        "https://www.mcivietnam.com/media/images/imgDownAWS/image39.png"
                    }
                /></Grid>


          <p className={"list_item_content_blog"}>
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </p>
          <p className={"list_item_content_blog"}>
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ..
          </p>{" "}
        </Grid>

        {/* sider bar  */}
        <Grid className={"siderbar_main_list"} item md={3} xs={12} sm={4}>
          <Siderbar />
        </Grid>
      </Grid>

      {/* list end slider */}
      <Grid container className={"Blog_relatsdfde_to"}>
        <Grid item md={10} className={"Blog_relate_to"}>
          <Grid container className={"Blog_relate_to_main"}>
            <Grid item md={3.6} className={"Blog_relate_to_list"}>
              <img
                className={"Blog_relate_to_img"}
                src={
                  "https://www.mcivietnam.com/media/home/special_event_banner.png"
                }
              />
              <p className={"Blog_relate_to_title"}>
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt
                qua nó như nào
              </p>
              <p className={"Blog_relate_to_img"}>
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
            </Grid>
            <Grid item md={3.6} className={"Blog_relate_to_list"}>
              <img
                className={"Blog_relate_to_img"}
                src={
                  "https://www.mcivietnam.com/media/home/special_event_banner.png"
                }
              />
              <p className={"Blog_relate_to_title"}>
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt
                qua nó như nào
              </p>
              <p className={"Blog_relate_to_img"}>
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
            </Grid>
            <Grid item md={3.6} className={"Blog_relate_to_list"}>
              <img
                className={"Blog_relate_to_img"}
                src={
                  "https://www.mcivietnam.com/media/home/special_event_banner.png"
                }
              />
              <p className={"Blog_relate_to_title"}>
                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt
                qua nó như nào
              </p>
              <p className={"Blog_relate_to_img"}>
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ...
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="Blog_relatsdfde_to1">
        <Grid item md={10} className="Blog_relate_to">
          <Grid container className="Blog_relate_to_main">
            {/* Slide hiện tại */}
            <Grid item md={3.6} className="Blog_relate_to_list">
              <img
                className="Blog_relate_to_img"
                src={slides[currentSlide].img}
                alt="Slide"
              />
              <p className="Blog_relate_to_title">
                {slides[currentSlide].title}
              </p>
              <p className="Blog_relate_to_img">
                {slides[currentSlide].content}
              </p>
            </Grid>

            {/* Nút điều hướng */}
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={prevSlide}
              className="prev_faAngleRight"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={nextSlide}
              className="nextfaAngleRight"
            />
          </Grid>
        </Grid>
      </Grid>
      {/*<Grid className={"right_blog_fixed"} item md={2} sm={4} xs={12}>*/}
      {/*</Grid>*/}
    </Grid>
  );
}
export default Blog;
