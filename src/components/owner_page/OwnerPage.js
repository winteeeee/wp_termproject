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
                <HeaderLayout></HeaderLayout>
            </div>
            <div className="owner_page_content">
                <OwnerPageHeader></OwnerPageHeader>
                <OwnerPageTab></OwnerPageTab>
                <Routes>
                    <Route path="/" element={null}></Route>
                    <Route path="/MenuReg" element={<OwnerPageMenuReg></OwnerPageMenuReg>}></Route>
                    <Route path="/Stats" element={<OwnerPageStats></OwnerPageStats>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default OwnerPage;