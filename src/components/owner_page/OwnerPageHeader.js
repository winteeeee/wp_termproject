import {Link} from "react-router-dom";

function OwnerPageHeader() {
    return (
        <Link to="/">
            <div className="my-page-header">
                <div className="sub-header-container">
                    <div className="sub-header-title">마이페이지</div>
                </div>
            </div>
        </Link>
    );
}

export default OwnerPageHeader;