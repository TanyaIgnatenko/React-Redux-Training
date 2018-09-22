const addItem = (array, item) => [item].concat(array);

const replaceItem = (array, itemId, newItem) => array.map(item => item.id === itemId ? newItem : item);

const removeItem = (array, itemId) => array.filter(item => item.id !== itemId);

export {
    addItem,
    replaceItem,
    removeItem
};

