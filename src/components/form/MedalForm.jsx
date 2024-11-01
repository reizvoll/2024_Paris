import React from "react";
import { SubmitBtn } from "./SubmitBtn";

const Fieldset = ({ formData, cellName, onChangeHandler }) => {
    let fieldsetName = "";
    let inputValue = "";
    let inputType = "text";

    if (cellName === "국가명") {
        fieldsetName = "country";
        inputValue = formData.country;
        inputType = "text";
    } else if (cellName === "금메달") {
        fieldsetName = "goldMedal";
        inputValue = formData.goldMedal;
        inputType = "number";
    } else if (cellName === "은메달") {
        fieldsetName = "silverMedal";
        inputValue = formData.silverMedal;
        inputType = "number";
    } else if (cellName === "동메달") {
        fieldsetName = "copperMedal";
        inputValue = formData.copperMedal;
        inputType = "number";
    }

    return (
        <div className="input-field">
            <label>{cellName}</label>
            <input className="input"
                type={inputType}
                name={fieldsetName}
                id={fieldsetName}
                onChange={onChangeHandler}
                value={inputValue}
                autoComplete="off"
            />
        </div>
    );
};

export const Form = ({ formData, setFormData, medalLists, setMedalList }) => {
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((oldData) => ({ ...oldData, [name]: value }));
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (Object.values(formData).includes("")) {
            alert("존재하지 않는 국가입니다. 국가를 추가해 주세요.");
            return;
        }

        for (const data of medalLists) {
            if (data.country === formData.country) {
                alert("메달 리스트에 이미 존재하는 국가입니다.");
                return;
            }
        }

        const unsortedList = [...medalLists, formData];

        unsortedList.sort((a, b) => b.goldMedal - a.goldMedal);

        setMedalList(unsortedList);

        localStorage.setItem("medalLists", JSON.stringify(updatedList));

        setFormData({ country: "", goldMedal: "", silverMedal: "", copperMedal: "" });
    };

    const updateBtn = () => {
        if (Object.values(formData).includes("")) {
            alert("데이터를 입력해주세요.");
            return;
        }
        const revisedList = medalLists.map((list) =>
            list.country === formData.country
                ? { ...formData }
                : list
        );

        setMedalList(revisedList);
        localStorage.setItem("medalLists", JSON.stringify(revisedList));

        setFormData({ country: "", goldMedal: "", silverMedal: "", copperMedal: "" });
    };

    return (
        <form onSubmit={onSubmitForm} className="form">
            <Fieldset formData={formData} onChangeHandler={onChangeHandler} cellName="국가명" />
            <Fieldset formData={formData} onChangeHandler={onChangeHandler} cellName="금메달" />
            <Fieldset formData={formData} onChangeHandler={onChangeHandler} cellName="은메달" />
            <Fieldset formData={formData} onChangeHandler={onChangeHandler} cellName="동메달" />
            <SubmitBtn className="btn" />
            <button onClick={updateBtn} type="button" className="btn">
                업데이트
            </button>
        </form>
    );
};

export default Fieldset;