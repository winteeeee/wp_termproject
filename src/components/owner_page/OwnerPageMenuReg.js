function OwnerPageMenuReg() {
    return (
        <div className="my-page-menureg">
            <div className="my-page-menureg-container">
                <div className="top-text">
                    메뉴 정보 입력
                </div>
                <div className="info-container">
                    <div className="alvolo-input">
                        <input type="text" placeholder="메뉴명"></input>
                    </div>
                    <div className="alvolo-input">
                        <input type="text" placeholder="가격"></input>
                    </div>
                    <div className="file-upload">
                        <input className="image-placeholder" placeholder="이미지 업로드"></input>
                        <span className="btn">업로드</span>
                        <input type="file" accept="image/*"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

//TODO input focus 시 border-bottom: 1px solid #41b6e6 적용시켜야함

export default OwnerPageMenuReg;