export const addMedal = (medalLists, setMedalList, formData) => {
    setMedalList([...medalLists, formData]);
};

export const updateMedal = (medalLists, setMedalList, formData) => {
    const updatedList = medalLists.map((list) =>
        list.country === formData.country ? { ...formData } : list
    );
    setMedalList(updatedList);
};

export const deleteMedal = (index, medalLists, setMedalList) => {
    setMedalList(medalLists.filter((_, i) => i !== index));
};