import HeaderLayout from "./HeaderLayout";
import MainContent from "./MainContent";
import "./MainPage.css";

const MainPage = () => {
    return(
        <div>
            <div className="web-main-tab-header-layout">
                <HeaderLayout></HeaderLayout>
            </div>
            <div className="client-main-page">
                <div className="content-body">
                    <div className="md-content-body">
                        <div className="layout-content-scroll">
                            <MainContent></MainContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;