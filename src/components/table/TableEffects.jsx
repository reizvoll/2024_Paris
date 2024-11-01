import React from "react";
import MedalTable from "./MainTable";

export const TableEffects = ({ medalLists, setMedalList }) => {
    const onDeleteMedal = (index) => {
        const updatedList = medalLists.filter((_, i) => i !== index);
        setMedalList(updatedList);
        localStorage.setItem("medalLists", JSON.stringify(updatedList));
    };

    return <MedalTable medalLists={medalLists} onDeleteMedal={onDeleteMedal} />;
};

export default TableEffects;