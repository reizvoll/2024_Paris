import React, { useState } from "react";
import "./App.css";
import { MainData } from "./components/MedalTracker";
import { addMedal, updateMedal, deleteMedal } from "./utils/Effects.js";

function App() {
    const [medalLists, setMedalList] = useState(() => {
        const savedMedalLists = localStorage.getItem("medalLists");
        return savedMedalLists ? JSON.parse(savedMedalLists) : [];
    });

    const [formData, setFormData] = useState({
        country: "",
        goldMedal: "",
        silverMedal: "",
        copperMedal: "",
    });

    return (
        <>
            <MainData
                medalLists={medalLists}
                setMedalList={setMedalList}
                formData={formData}
                setFormData={setFormData}
            />
        </>
    );
}

export default App;

