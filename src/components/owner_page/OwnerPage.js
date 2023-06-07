import OwnerPageHeader from "./OwnerPageHeader";
import OwnerPageTab from "./OwnerPageTab";
import OwnerPageMenuReg from "./OwnerPageMenuReg";
import OwnerPageStats from "./OwnerPageStats";
import './OwnerPage.css'
import {Routes, Route} from "react-router-dom";
import HeaderLayout from "../main_page/HeaderLayout";

function OwnerPage() {
    return (
        <div className="owner_page">
            <div className="web-main-tab-header-layout">
                <HeaderLayout/>
            </div>
            <div className="owner_page_content">
                <OwnerPageHeader/>
                <OwnerPageTab/>
                <Routes>
                    <Route path="/MenuReg" element={<OwnerPageMenuReg/>}/>
                    <Route path="/Stats" element={<OwnerPageStats/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default OwnerPage;