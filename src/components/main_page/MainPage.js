import { useState } from 'react';
import PizzaPage from '../pizza/Pizza';

import HeaderLayout from "./HeaderLayout";
import MainContent from "./MainContent";
import "./MainPage.css";

const MainPage = () => {
    const [pageName, setPageName] = useState("main");
    const page = {
        mainPage: "main",
        pizzaPage: "pizza"
    }

    function gotoMain() {
        setPageName(page.mainPage);
    }
    
    function gotoPizza() {
        setPageName(page.pizzaPage);
    }

    return(
        <div>
            <div className="web-main-tab-header-layout">
                <HeaderLayout gotoMain={gotoMain} gotoPizza={gotoPizza}></HeaderLayout>
            </div>
            <div className="client-main-page">
                <div className="content-body">
                    <div className="md-content-body">
                        <div className="layout-content-scroll">
                            {(pageName === page.mainPage) && <MainContent gotoPizza={gotoPizza}></MainContent>}
                            {(pageName === page.pizzaPage) && <PizzaPage></PizzaPage>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;