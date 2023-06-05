import {Link, useLocation} from "react-router-dom";
import './OwnerPageTab.css'

function OwnerPageTab() {
    const location = useLocation();

    return (
        <div className="menutab-page-whole-div">
            <div className="menutab-page-menutab">
                <Link to="/ownerPage/MenuReg">
                    <div className="menutab-page-title">
                        <h5 className={location.pathname === "/ownerPage/MenuReg" ? "selected" : ""}>메뉴등록</h5>
                    </div>
                </Link>

                <Link to="/ownerPage/Stats">
                    <div className="menutab-page-title">
                        <h5 className={location.pathname === "/ownerPage/Stats"? "selected" : ""}>판매수량확인</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default OwnerPageTab;