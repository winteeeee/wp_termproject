import {Link} from "react-router-dom";
import {useState} from "react";

function OwnerPageMenuReg() {
    const [fileName, setFileName] = useState("이미지 업로드");

    return (
        <div className="my-page-menureg">
            <div className="my-page-menureg-container">
                <div className="top-text">
                    메뉴 정보 입력
                </div>
                <div className="info-container">
                    <form>
                        <div className="alvolo-input">
                            <input type="text" placeholder="메뉴명" onFocus={(e) => {
                                e.target.className = "focus";
                            }} onBlur={(e) => {
                                e.target.className = "";
                            }}></input>
                        </div>
                        <div className="alvolo-input">
                            <input type="text" placeholder="가격" onFocus={(e) => {
                                e.target.className = "focus";
                            }} onBlur={(e) => {
                                e.target.className = "";
                            }}></input>
                        </div>
                        <div className="file-upload">
                            <input className="image-placeholder" placeholder={fileName} disabled></input>
                            <label className="btn" htmlFor="file-upload">업로드</label>
                            <input type="file" id="file-upload" accept="image/*" onChange={(e) => {
                                setFileName('' + e.target.files[0].name);
                            }}></input>
                        </div>
                        <div className="btn-area">
                            <Link to="/">
                                <div className="btn-cancel">취소</div>
                                <div className="btn-ok">확인</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    //TODO 확인 버튼 누르면 DB에 insert 되도록 구현
}

export default OwnerPageMenuReg;