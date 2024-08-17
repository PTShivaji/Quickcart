export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

// New action to decrease quantity
export const removeItem = (product) => {
    return {
        type: 'REMOVEITEM',
        payload: product
    }
}