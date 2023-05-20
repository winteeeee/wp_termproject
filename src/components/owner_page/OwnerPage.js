import OwnerPageHeader from "./OwnerPageHeader";
import OwnerPageTab from "./OwnerPageTab";
import OwnerPageMenuReg from "./OwnerPageMenuReg";
import OwnerPageStats from "./OwnerPageStats";
import './OwnerPage.css'

function OwnerPage() {
    return (
        <div className="owner_page">
            <OwnerPageHeader></OwnerPageHeader>
            <OwnerPageTab></OwnerPageTab>
            <OwnerPageMenuReg></OwnerPageMenuReg>
            <OwnerPageStats></OwnerPageStats>
        </div>
    )
}

export default OwnerPage;