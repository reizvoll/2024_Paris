import React from "react";
import { Form } from "./form/MedalForm";
import MedalTable from "./table/TableEffects";

export const MainData = ({ medalLists, setMedalList, formData, setFormData }) => (
    <main>
                
        <div className="wrapper">
        <h1>2024 올림픽</h1>
            <Form
                medalLists={medalLists}
                setMedalList={setMedalList}
                formData={formData}
                setFormData={setFormData}
            />
            <MedalTable
                medalLists={medalLists}
                setMedalList={setMedalList}
            />
        </div>
    </main>
);