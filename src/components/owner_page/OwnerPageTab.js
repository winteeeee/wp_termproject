import {Link, useLocation} from "react-router-dom";

function OwnerPageTab() {
    const location = useLocation();

    return (
        <div className="menutab-page-whole-div">
            <div className="menutab-page-menutab">
                <Link to="/MenuReg">
                    <div className="menutab-page-title">
                        <h5 className={location.pathname === "/MenuReg" ? "selected" : ""}>메뉴등록</h5>
                    </div>
                </Link>

                <Link to="/Stats">
                    <div className="menutab-page-title">
                        <h5 className={location.pathname === "/Stats"? "selected" : ""}>판매수량확인</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default OwnerPageTab;