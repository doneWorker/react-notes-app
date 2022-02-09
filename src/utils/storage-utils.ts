export const saveToLS = (key: string, data: any, isJSON = true) => {
    const _data = !isJSON ? data : JSON.stringify(data);
    return localStorage.setItem(key, _data);
};

export const loadFromLS = (key: string, isJSON = true) => {
    const data = localStorage.getItem(key);
    return !isJSON ? data : data !== null && JSON.parse(data);
};

export const clearLS = () => {
    localStorage.clear();
};
