import {Grid} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import "../Content-module.scss";
function Search_Menu() {
    return (
        <Grid container className={"Search_Menu"}>
            <Grid md={12} sm={12} xs={12} className="list_item_content_right">
                <FontAwesomeIcon className="content_right-search" icon={faSearch}/>
                <input placeholder="Tìm Kiếm bài viết" className="content_right-input"/>
            </Grid>

            <ul className="content_right-nav">
                <li className="content_right-nav-list">
                    Chia sẻ
                    kinh nghiệm
                </li>
                <li className="content_right-nav-list">
                    Kiến Thức Chuyên Môn
                </li>
                <li className="content_right-nav-list">
                    MCI Careers
                </li>
                <li className="content_right-nav-list">
                    Kinh nghiệm
                    thực chiến
                </li>
                <li className="content_right-nav-list">
                    Lịch
                    khai giảng
                </li>
            </ul>
        </Grid>
    )
}

export default Search_Menu;