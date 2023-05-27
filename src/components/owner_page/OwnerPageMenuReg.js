import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function OwnerPageMenuReg() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [kind, setKind] = useState("");
    const [priceL, setPriceL] = useState("");
    const [priceR, setPriceR] = useState("");
    const [topping1, setTopping1] = useState("");
    const [topping2, setTopping2] = useState("");
    const [topping3, setTopping3] = useState("");
    const [img, setImg] = useState();
    const [fileName, setFileName] = useState("이미지 업로드");

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const descriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const kindChange = (e) => {
        setKind(e.target.value);
    }

    const priceLChange = (e) => {
        setPriceL(e.target.value);
    }

    const priceRChange = (e) => {
        setPriceR(e.target.value);
    }

    const topping1Change = (e) => {
        setTopping1(e.target.value);
    }

    const topping2Change = (e) => {
        setTopping2(e.target.value);
    }

    const topping3Change = (e) => {
        setTopping3(e.target.value);
    }

    const fileChange = (e) => {
        setImg(e.target.files[0]);
        setFileName('' + e.target.files[0].name);
    }

    const onFocus = (e) => {
        e.target.className = "focus";
    }

    const onBlur = (e) => {
        e.target.className = "";
    }

    const submit = (e) => {
        const pizza = new FormData();
        pizza.append("name", name);
        pizza.append("description", description);
        pizza.append("kind", kind);
        pizza.append("priceL", priceL);
        pizza.append("priceR", priceR);
        pizza.append("topping1", topping1);
        pizza.append("topping2", topping2);
        pizza.append("topping3", topping3);
        pizza.append("img", img);
        for (let key of pizza.keys()) {
            console.log(pizza.get(key));
        }

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
                            <input type="text" value={description} placeholder="설명" onFocus={onFocus} onBlur={onBlur} onChange={descriptionChange}></input>
                        </div>
                        <div className="alvolo-input">
                            <select defaultValue="null" onChange={kindChange}>
                                <option value="null" disabled>종류 선택</option>
                                <option value="masterPizza">장인피자</option>
                                <option value="expertPizza">달인피자</option>
                                <option value="luxuryPizza">명품피자</option>
                            </select>
                        </div>
                        <div className="alvolo-input">
                            <input type="number" value={priceL} placeholder="라지 가격" onFocus={onFocus} onBlur={onBlur} onChange={priceLChange}></input>
                        </div>
                        <div className="alvolo-input">
                            <input type="number" value={priceR} placeholder="레귤러 가격" onFocus={onFocus} onBlur={onBlur} onChange={priceRChange}></input>
                        </div>
                        <div className="alvolo-input">
                            <input type="text" value={topping1} placeholder="토핑1" onFocus={onFocus} onBlur={onBlur} onChange={topping1Change}></input>
                        </div>
                        <div className="alvolo-input">
                            <input type="text" value={topping2} placeholder="토핑2" onFocus={onFocus} onBlur={onBlur} onChange={topping2Change}></input>
                        </div>
                        <div className="alvolo-input">
                            <input type="text" value={topping3} placeholder="토핑3" onFocus={onFocus} onBlur={onBlur} onChange={topping3Change}></input>
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
}

export default OwnerPageMenuReg;