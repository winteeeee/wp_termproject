import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function OwnerPageMenuReg() {
    const [name, setName] = useState("");
    const [priceL, setPriceL] = useState("");
    const [fileName, setFileName] = useState("이미지 업로드");

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const priceLChange = (e) => {
        setPriceL(e.target.value);
    }

    const fileChange = (e) => {
        setFileName('' + e.target.files[0].name);
    }

    const onFocus = (e) => {
        e.target.className = "focus";
    }

    const onBlur = (e) => {
        e.target.className = "";
    }

    const submit = (e) => {
        const pizza = {
            name: name,
            priceL: priceL
        };
        console.log(pizza);

        axios.post("http://localhost:4000/MenuReg", pizza).then(r => console.log(r));
    }

    return (
        <div className="my-page-menureg">
            <div className="my-page-menureg-container">
                <div className="top-text">
                    메뉴 정보 입력
                </div>
                <div className="info-container">
                    <form>
                        <div className="alvolo-input">
                            <input type="text" value={name} placeholder="메뉴명" onFocus={onFocus} onBlur={onBlur} onChange={nameChange}></input>
                        </div>
                        <div className="alvolo-input">
                            <input type="number" value={priceL} placeholder="가격" onFocus={onFocus} onBlur={onBlur} onChange={priceLChange}></input>
                        </div>
                        <div className="file-upload">
                            <input className="image-placeholder" placeholder={fileName} disabled></input>
                            <label className="btn" htmlFor="file-upload">업로드</label>
                            <input type="file" id="file-upload" accept="image/*" onChange={fileChange}></input>
                        </div>
                        <div className="btn-area">
                            <Link to="/">
                                <div className="btn-cancel">취소</div>
                                <div className="btn-ok" onClick={submit}>확인</div>
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