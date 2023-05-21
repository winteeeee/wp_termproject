import OwnerPageHeader from "./OwnerPageHeader";
import OwnerPageTab from "./OwnerPageTab";
import OwnerPageMenuReg from "./OwnerPageMenuReg";
import OwnerPageStats from "./OwnerPageStats";
import './OwnerPage.css'
import {Routes, Route} from "react-router-dom";

function OwnerPage() {
    return (
        <div className="owner_page">
            <OwnerPageHeader></OwnerPageHeader>
            <OwnerPageTab></OwnerPageTab>
            <Routes>
                <Route path="/" element={null}></Route>
                <Route path="/MenuReg" element={<OwnerPageMenuReg></OwnerPageMenuReg>}></Route>
                <Route path="/Stats" element={<OwnerPageStats></OwnerPageStats>}></Route>
            </Routes>
        </div>
    )
}

export default OwnerPage;