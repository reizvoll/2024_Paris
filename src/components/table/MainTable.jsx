import React from "react";

function MedalTable({ medalLists, onDeleteMedal }) {
    return (
        <div className="tableWrapper">
            <table className="table">
                <thead className="tableHeader">
                    <tr className="tableRow">
                        <th className="tableCell">국가명</th>
                        <th className="tableCell">금메달</th>
                        <th className="tableCell">은메달</th>
                        <th className="tableCell">동메달</th>
                        <th className="tableCell">삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {medalLists.map((medalList, index) => (
                        <tr className="tableRow" key={index}>
                            <td className="tableCell">{medalList.country}</td>
                            <td className="tableCell">{medalList.goldMedal}</td>
                            <td className="tableCell">{medalList.silverMedal}</td>
                            <td className="tableCell">{medalList.copperMedal}</td>
                            <td className="tableCell">
                                <button className="delete-btn" onClick={() => onDeleteMedal(index)}>
                                    삭제
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MedalTable;