import {Link, useLocation} from "react-router-dom";

function OrderListTab() {
    const location = useLocation();

    return (
        <div className="MyPageMenu">
            <div className="My_page_tab">
                <Link to="/ShowMyOrder">
                    <div className="menutab-page-insertMenu">
                        <h5 className={location.pathname === "/ShowMyOrder" ? "selected" : ""}>메뉴등록</h5>
                    </div>
                </Link>
                <Link to="/ModifyMyInfo">
                    <div className="menutab-page-ModifyInfo">
                        <h5 className={location.pathname === "/ModifyMyInfo"? "selected" : ""}>정보 수정</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default OrderListTab;