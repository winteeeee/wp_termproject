import "./ShoppingSubHeader.css"
function ShoppingSubHeader() {
    return (
        <body>
        <div className="basket-header-title">장바구니</div>
        <div className="order-basket-list-header">
            <div className="order-basket-list-menu">메뉴</div>
            <div className="order-basket-list-count">수량</div>
            <div className="order-basket-list-price">가격</div>
            <div className="order-basket-list-change">변경</div>
            <div className="order-basket-list-change">삭제</div>
        </div>
        </body>
    )
}

export default ShoppingSubHeader;