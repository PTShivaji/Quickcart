const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM":
            // Check if the item already exists in the cart
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                // Increase the quantity if the item exists
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
                );
            } else {
                // Add new item with quantity 1
                const item = { ...action.payload, quantity: 1 };
                return [
                    ...state,
                    item
                ];
            }

        case "REMOVEITEM":
            const exist1 = state.find((x) => x.id === action.payload.id);
            if (exist1.quantity === 1) {
                // Remove item if the quantity is 1
                return state.filter((x) => x.id !== action.payload.id);
            } else {
                // Decrease the quantity if more than 1
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, quantity: x.quantity - 1 } : x
                );
            }

        case "DELITEM":
            // Completely remove the item from the cart
            return state.filter((x) => x.id !== action.payload.id);

        default:
            return state;
    }
};

export default addItems;
